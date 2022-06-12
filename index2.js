const http = require('http')
const { stringify } = require('querystring')

const PORT =  process.env.PORT || 8080

const server = http.createServer((req,res)=>{

 res.writeHead(200,
    { 
        'Content-Type':"application/json",
        'statusText':"SuperSmashingGreat!",
    }

    )
 res.end(JSON.stringify({
     id : 2,
     name : 'Ebenezer Johnson',
     'a': 35,
 }))
},

)

server.listen(PORT,() => {
    console.log(`Server is listening`)
})

