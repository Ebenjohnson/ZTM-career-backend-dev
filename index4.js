const { Console } = require('console');
const http = require('http');

const PORT = 3300

const server = http.createServer()

const friends= [
    {
        Id : 0,
        name : 'Sir Nikola Tesla ',
        age : 40,
    }, 

    {
        Id : 1,
        name : 'Sir Isaac Newton ',
        age : 36,
    },
    {
        Id : 2,
        name : 'Dr Ebenezer Johnson',
        age : 30
    }
   ]

server.on('request',(req, res) => {

    const items = req.url.split('/')
    /// friends/2 => ['', 'friends','2']

    if(req.method === 'POST' && items[1] === 'friends'){
        req.on('data', (data)=> {
            const friend = data.toString()
            console.log('Request:', friend)
           friends.push(JSON.parse(friend))
           
        })
        req.pipe(res)

    } else if (req.method === 'GET' && items[1] === 'friends') {
        res.writeHead (200 , {
            "content-type": "application/json",
            
        })
    if (items.length===3){
        const friendsIndex =  Number(items[2])
    res.end(JSON.stringify(friends[friendsIndex]))
    } else{
        res.end(JSON.stringify(friends))
    }
            
    } else if (req.method === 'GET' && items[1] === 'messages'){

        res.statusCode = 200
       
        res.setHeader('content-Type','text/html')
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>Hello Isaac</li>')
        res.write('<li>What are your thought on astronomy</li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
  
    } else {
        res.statusCode = 404
        res.end()
    }

    

})

server.listen(PORT, () => {

    console.log(`Listening on Port ${PORT} ...
    `)
})