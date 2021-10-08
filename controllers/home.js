module.exports = app => {
    app.get('/', (req, res) => res.send('home'))

    app.post('/', (req, res) => {
        res.send('enviado')
    })
}