const path = require('path');

module.exports = app => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname+'/../public/index.html'))
    })

    app.post('/', (req, res) => {
        console.log(req.body)
        res.send('enviado')
    })
}