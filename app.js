const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('About page')
    }
    res.end('<h1>OOPS! no page found</h1>')
})
server.listen(5000)