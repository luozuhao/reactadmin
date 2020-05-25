const express = require('express');
const app = express()
const user = require("./routers/user")
const debug = require('debug')("my-application")
app.use('/api/user',user)
app.listen('3030',(req,res)=>{
    debug('服务器运行在3030端口')
})
