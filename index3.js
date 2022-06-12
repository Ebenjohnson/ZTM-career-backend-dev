const http = require('http')
const { type } = require('os')

const server = http.createServer((req,res)=>{
    if(http.STATUS_CODES = 200){
    res.writeHead(200, {
    'content-type' : 'application/json'
    })
    res.end('Testing 123...')
} else{
    server.setTimeout(500,()=>{
        console.log("CHECK CONNECTION")
    })
}
})

PORT = process.env.PORT || 9000

server.listen(PORT, ()=>{

    console.log('The server is running the huge server with serverID : ' + PORT)
})