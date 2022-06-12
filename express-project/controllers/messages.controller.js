
const path = require('path')

function getMessages(req, res) {

    //res.send('<ul><li> Hello Ebenezer! </li></ul>');
    res.sendFile(path.join(__dirname,'..', 'public','images','miomo.jpg'))

}

function postMessage(req, res) {
        console.log('Updating messages...') 
}

module.exports ={
    getMessages,
    postMessage
}
