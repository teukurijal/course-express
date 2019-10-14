const models = require('../models')
const Post = models.post
const User = models.user

exports.index = (req, res) => {
    Post.findAll({
        include: [{
            model: User,
            as: "createdBy"
        }]
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
} 

exports.show = (req, res) => {
    const { id } = req.params
    Post.findOne({ 
        where: { id },
        include: [{
            model: User,
            as: "createdBy"
        }]
    }).then(post=>
        res.send(post)
        ).catch(err => {
            res.send(err)
    })
}

exports.store = (req, res) => {
    Post.create(req.body)
    .then(post=> {
        res.send({
            message: "success",
            post
        })
    }).catch(err => {
        console.log(err)
    })
}

exports.update = (req, res) => {
    Post.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(post=> {
        res.send({
            message: "success",
            post
        })
    }).catch(err => {
        console.log(err)
    })
}

exports.delete = (req, res) => {
    Post.destroy({where: {id: req.params.id}}).then(post=> {
        res.send({
            message: "success",
            post
        })
    }).catch(err => {
        console.log(err)
    })
}