const requestHandler = (req, res) => {
    res.setHeader("Content-Type", "text/html")
    const url = req.url
    const body = []
    if(url === "/") {
        res.write("<html><h1>Hi have a good day</h1><div><form action='/create-user' method='POST'><input type='text' name='user'><button>Click here</button></form></div></html>")
        return res.end()
    }

    if(url === '/users') {
        res.write("<html><ul><li>user1</li><li>user2</li><li>user3</li></ul></html>")
        return res.end()
    }

    if(url === "/create-user") {
        req.on("data", (chunk) => {
            body.push(chunk)
        })
        req.on("end", () => {
            const data = Buffer.concat(body).toString()
            console.log(data.split("=")[1]);
        })
        res.statusCode = 302
        res.setHeader("Location", "/")
        res.end()
    }
}

module.exports = {
    handler: requestHandler
}