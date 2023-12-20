const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page!')
    }
    if (req.url === '/about') {
        res.end('What woud you like to know about me?')
    }
    else {
        res.end(`
    <h1>Oops</h1>
    <p>We can't acces this page</p>
    <a href="/">Back home</a>
    `)
    }
})

server.listen(5000)