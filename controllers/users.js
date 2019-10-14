const models = require('../models')
const Post = models.post
const User = models.user

exports.index = (req, res) => {
    User.findAll({
        
    }).then(posts=>
        res.send(posts)
    ).catch(err => {
        console.log(err)
    })
}

exports.show = (req, res) => {
    const { id } = req.params
    User.findOne({ 
        where: { id },
    }).then(post=>
        res.send(post)
        ).catch(err => {
            res.send(err)
    })
}

exports.store = (req, res) => {
   User.findOrCreate({
        where: {email: req.body.email},
        default: { 
            password: req.body.password,
            name: req.body.name
        }
      }).then(post=> {
        res.send({
            message: "success",
            post
        })
    }).catch(err => {
        console.log(err)
    })
}

