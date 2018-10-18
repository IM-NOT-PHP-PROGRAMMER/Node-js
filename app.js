const http = require('http')
const port = 8080

const requestHandler = (request, response) => {
    console.log(request.url)
    response.end("HTTP/1.0 200 OK\n" +
                    "Content-Type: text/html\n" +
                    "Connection: Close\n" +
                    "\r\n" +
                    "<html>\n" +
                    "<head>\n" + 
                    "<title>Boi</title>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "lemme see...\n" +
                    "</body>\n" +
                    "</html>\n")
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
