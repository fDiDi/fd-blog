const querystring = require('querystring')

const handlerRouter = require('./src/router/blog')
const handlerUsersRouter = require('./src/router/user')
// /Users/fengdi/Documents/node/blog-1/src/router/blog.js

console.log('handlerRouter', handlerRouter)
const getPostData = req => {
    const promise = new Promise((resolve, reject) => {
        if (req.method !== 'POST'){
            resolve({})
        }
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            console.log('this is postData', postData)
            if (!postData) {
                resolve({})
                return
            }
            resolve(JSON.parse(postData))
        })
    
    })
    return promise
}
const serverHandle = (req, res) => {
    // 获取path
    const url = req.url
    req.path = url.split('?')[0]
    // 解析query
    req.query = querystring.parse(url.split('?')[1])
    // 处理postData
    getPostData(req).then(postData => {
        req.body = postData
        console.log('postData==>',postData)
        // 设置返回格式
        res.setHeader('Content-type', 'application/json')
        const blogData = handlerRouter(req, res)
        // 处理博客路由
        if (blogData) {
            res.end(JSON.stringify(blogData))
            return
        }
        // 处理用户路由 
        console.log('处理用户路由')
        const userData = handlerUsersRouter(req, res)
        if (userData) {
            res.end(JSON.stringify(userData))
            return
        }
        console.log('userData==>', userData)
        // 未命中路由
        res.writeHead('404', {"Content-type": 'text-plain'})
        res.write('404 not found !\n')
        res.end()
    })
}
module.exports = serverHandle