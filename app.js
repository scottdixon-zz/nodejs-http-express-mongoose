const http = require('http')
const port = 3000

let students = ['Scott', 'Simon']

function handleRequest(request, response) {

  if (request.url === '/students') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    })
    response.end(JSON.stringify(students))
  }

}

const server = http.createServer(handleRequest)

server.listen(port)
