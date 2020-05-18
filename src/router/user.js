const {login} = require('../controller/user')
const {SuccessModel, ErrorModel} = require('../model/resModel')

const handlerUsersRouter = (req, res) => {
    const method = req.method
    console.log("req===", req)
    // 用户登录
    if (method === "POST" && req.path === "/api/user/login") {
        const res = login(req.body)
        console.log('loginres==>', res)
        return new SuccessModel(res)
    }
}
module.exports = handlerUsersRouter