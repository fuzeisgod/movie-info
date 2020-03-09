const { User } = require('../models')

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            res.status(201).send({
                user
            })
        }
        catch (error) {
            res.status(400).send({
                code: 400,
                error: '该邮箱已经注册'
            })
        }
    },
    async getUserById(req, res) {
        try {
            const user = await User.findByPk(req.params.id)
            if (user) {
                res.status(200).send({
                    user
                })
            } else {
                res.status(400).send({
                    code: 400,
                    error: '没有找到对应的数据'
                })
            }
        } catch (error) {
            res.status(500).send({
                code: 500,
                error: '数据查询失败'
            })
        }
    },
    async update(req, res) {
        try {
            const user = await User.update(
                req.body,
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            res.status(200).send({
                message: '数据更新成功！'
            })
        } catch (error) {
            res.status(500).send({
                code: 500,
                error: '数据更新失败'
            })
        }
    },
    async delete(req, res) {
        try {
            const user = await User.destroy({
                where: {
                    id: req.params.id
                },
                // 删除，而不是将deleteAt设置为当前时间戳（仅在paranoid启用时适用）
                force: true
            })
            res.status(200).send({
                message: '数据删除成功！'
            })
        } catch (error) {
            res.status(500).send({
                code: 500,
                error: '数据删除失败'
            })
        }
    }
}