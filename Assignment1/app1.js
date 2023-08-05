const http = require("http")

const routes = require("./routes1.js")

const server = http.createServer(routes.handler)

server.listen("3002")