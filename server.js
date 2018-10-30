const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const app = express()
const port = process.env.PORT || 5000

// app.use(express.static(__dirname + "/dist/"))
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/dist/index.html'))
})
app.listen(port)

console.log('server started '+ port)