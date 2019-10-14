const express = require('express')
//init bodyParser
const bodyParser = require('body-parser')
//group router
require('express-group-routes')

const app = express()
const port = 5000

const AuthController = require('./controllers/auth')
const PostsController = require('./controllers/posts')
const UserController = require('./controllers/users')

const{ authenticated } = require('./middleware')

app.use(bodyParser.json())



app.group("/api/v1", (router) => {

    router.post('/login', AuthController.login)

    router.get('/users', UserController.index)    
    router.get('/user/:id', UserController.show)    
    router.post('/user', UserController.store)

    router.get('/posts', PostsController.index)    
    router.get('/post/:id', PostsController.show)    
    router.post('/post', authenticated, PostsController.store)
    router.patch('/post/:id', authenticated, PostsController.update) 
    router.delete('/post/:id', authenticated, PostsController.delete) 

})





app.listen(port, () => console.log(`Listening on port ${port}!`))