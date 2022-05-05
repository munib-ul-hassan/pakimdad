const express = require('express')
const Router = express.Router()
const auth = require('../controller/auth')
const router = ()=>{
    Router.post('/login', auth.login)    
    Router.post('/register', auth.register)
    Router.post('/signinwithgoogle', auth.googlelogin)
    return Router;
}
module.exports =  router()