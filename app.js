// CREATE SERVER

const http  = require("http")

// Long way
// function rqListener(req, res) {

// }
// http.createServer(rqListener)

// Short way
const server = http.createServer((req, res) => {
    console.log(req)
    res.setHeader("Content-Type", "text/html")
    res.write("<html><head><title>Enter Message</title></head><body><form action='/message' method='POST'><input type='text' type='submit'/><button typr='submit'>Submit</button></form></body></html>")
    res.end()
    // for quitting server
    // process.exit()
})

server.listen("3001")
