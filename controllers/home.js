const path = require('path');
const sendForm = require('../src/sendForm')

module.exports = app => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname+'/../public/index.html'))
    })

    app.post('/', (req, res) => {
        console.log(req.body)
        sendForm(req.body.email, req.body.subject, req.body.content)
        res.sendFile(path.join(__dirname+'/../public/index.html'))
    })
}