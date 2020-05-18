const getList = (atuhor, keywords) => {
    return [ 

        {
            id: 1,
            titile: '博客A',
            creatTime: "1588660205183",
            author: 'zhangsn'
        },
        {
            id: 2,
            titile: '博客A',
            creatTime: "1588660205183",
            author: 'zhangsn'
        }
    ]
}
const getDetail = (id) => {
    return {
        id,
        titile: '博客A',
        creatTime: "1588660205183",
        author: 'zhangsn'
    }
}
const newBlog = (blogData = {}) => {
    console.log('新增blogData==>', blogData)
    return {
        id: 3
    }
}
const updateBlog = (id, blogData = {}) => {
    console.log('更新博客id', id)
    console.log('更新blogData==>', blogData)
    return true
}
const delBlog = id => {
    console.log('删除博客id', id)
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}