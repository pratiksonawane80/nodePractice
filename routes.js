const fs = require("fs")


// const arr = ["Apple", "Ant", "Ball", "Baloon", "Cat", "Car", "Dog", "Dark", "Eat", "Ear"]
// const sol = arr.reduce((acc, cur) => {
//   debugger
//   if(!acc[cur[0]]) {
//   	acc[cur[0]] = [cur]
//   }
//   else {
//   	acc[cur[0]].push(cur)
//   }
//   return acc
// }, {})

// console.log(sol)

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method
    if(url === "/"){
        res.write("<html><head><title>Enter Message</title></head><body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Submit</button></form></body></html>")
        return res.end()
    }
    if(url === "/message" && method === "POST") {
        const body = []
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader("Content-Type", "text/html")
    res.write("<html><head>My First Page</head><body>Hello form another world</body></html>")
    res.end()
}

module.exports = {
    handler: requestHandler
}