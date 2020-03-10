const UserController = require('./controllers/UserController')
const AuthenticatePolicy = require('./policies/AuthenticatePolicy')


module.exports = (app) => {
    app.post('/users/login', UserController.login)
    // 安全策略放前面
    app.get('/users/:id',
        AuthenticatePolicy.isValidToken, UserController.getUserById)
    app.put('/users/:id', UserController.update)
    app.delete('/users/:id', UserController.delete)
    app.post('/users', UserController.register)
}