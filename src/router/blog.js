const {getList, getDetail, newBlog, updateBlog, delBlog} = require('../controller/blog')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const handlerRouter = (req, res) => {
    const method= req.method
    
    // 获取博客列表
    if (method === "GET" && req.path === "/api/blog/list") {
        const author = req.query.author
        const keyword = req.query.keyword
        const listData = getList(author, keyword)
        return new SuccessModel(listData)
    }
    // 获取博客详情
    if (method === "GET" && req.path === "/api/blog/detail") {
       const id = req.query.id
       const detailData = getDetail (id)
       return new SuccessModel(detailData)
    }
    // 新增博客
    if (method === "POST" && req.path === "/api/blog/new") {
        const res = newBlog(req.body)
        return new SuccessModel(res)
    }
    // 更新博客详情
    if (method === "POST" && req.path === "/api/blog/update") {
        const res = updateBlog(req.query.id, req.body)
        if (res) {
            return new SuccessModel(res)
        } else {
            return new ErrorModel('更新博客失败')
        }
    }
    // 删除博客
    if (method === "POST" && req.path === "/api/blog/delete") {
        const res = delBlog(req.query.id)
        if (res) {
            return new SuccessModel(res)
        } else {
            return new ErrorModel("删除博客失败")
        }
    }
}
module.exports = handlerRouter