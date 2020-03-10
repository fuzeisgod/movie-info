const Jwt = require('jsonwebtoken')
const config = require('../config')

function tokenVerify(token) {
    try {
        // 如果不提供回调函数，则 verify 是一个同步方法
        Jwt.verify(token, config.token.secretOrPrivateKey)
        return true
    } catch (error) {
        return false
    }
}

module.exports = {
    isValidToken(req, res, next) {
        let bearerToken = req.headers.authorization
        try {
            let token = bearerToken.split(' ')[1]
            if (tokenVerify(token)) {
                // 在 app.get() 方法中如有多个回调函数，则 需要 next() 跳至下一个回调函数
                next()
            } else {
                res.status(403).send({
                    code: 403,
                    error: '登录凭证无效请重新登录'
                })
            }
        } catch (error) {
            res.status(401).send({
                status: 401,
                error: '请登陆后再访问'
            })
        }
    }
}