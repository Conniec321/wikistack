const express = require('express');
const { append } = require('express/lib/response');
const { User, Page } = require('../models');
const wikiRouter = express.Router();
const {addPage} = require('../views')

wikiRouter.get('/',async (req,res,next)=> {
    try {
        const allPosts = await Page.findAll()
        res.send(allPosts)
    } catch (error) {
        next(error)
    }
})

wikiRouter.get('/add', async (req,res,next)=> {
    try {
        const data = await addPage()
        res.send(data)
    } catch (error) {
        next(error)
    }

})

wikiRouter.post('/', async (req,res,next) => {
   try {
   
    console.log(req.body)
    const author = req.body.author
    const authorEmail = req.body.author_email
    const title = req.body.title
    const content = req.body.content
    const status = req.body.status

    const newUser = await User.create({
        name: author,
        email: authorEmail
    })
    const newPage = await Page.create({
        title: title,
        slug: `localhost:3000/wiki/users/${newUser.id}`,
        content: content,
        status: status
    })
    res.redirect('/')
   } catch (error) {
       next(error)
   }
})

wikiRouter.get('/users', async (req,res,next)=> {
    try {
        const allUsers = await User.findAll()
        res.send(allUsers)
    } catch (error) {
        next(error)
    }
})

wikiRouter.get('/user/:id', async (req,res,next)=> {
    try {
        const userId = await User.findByPk(req.params.id)
        res.send(userId)
    } catch (error) {
        next(error)
    }
})

wikiRouter.put('/users/:id', async (req,res,next)=> {
    const updatedUser = await User.update(req.body)
    res.send(updatedUser)
})

wikiRouter.delete('/users/:id', async (req,res,next)=> {
    const user = await User.findByPk(req.params.id)
    const deletedUser = await User.destroy(user)
    res.redirect('/users')
})

module.exports = wikiRouter