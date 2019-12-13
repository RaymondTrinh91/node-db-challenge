const server = require('./server.js')

const port = 4600

server.listen(port, ()=> {
    console.log(`\n Server is running on ${port} \n`)
})
