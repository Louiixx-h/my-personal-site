const customExpress = require('./config/customExpress')

const app = customExpress()
const port = '5005'

app.listen(port, () => {
    console.log(`servidor rodando na url http://localhost:${port}`)
})