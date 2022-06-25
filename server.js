const express =  require('express')
const path = require('path')

const friendsRouter = require('./routes/friends.router')
const messagesRouter = require('./routes/messages.router')

const app = express()

const PORT = 3000

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'views'))



app.use((req,res,next)=>{
    const start = Date.now()    
    next()
    //actions go here
    const delta = Date.now() -start
    console.log( `${req.method} ${req.baseUrl}${req.url} ${delta}ms`)
})

app.get('/',(req,res)=>{
    res.render('index',{
        title : 'My Friends are very cleaver',
        caption : 'Let\'s go skiing!',
    })

})
//app.use(express.static('public'))
//app.use('/site', express.static('public'))
app.use('/site', express.static(path.join(__dirname,'public')))
app.use(express.json())

app.use('/friends',friendsRouter)
app.use('/messages',messagesRouter)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}....`)
})