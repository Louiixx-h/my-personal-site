module.exports = app => {
    app.get('/', (req, res) => {
        res.send('home')
    })

    app.post('/', (req, res) => {
        console.log(req.body)
        res.send('enviado')
    })
}