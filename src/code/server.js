const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(`${__dirname}/../public`)))

app.get('/', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../public/pages/index.html`))
})

app.listen(3003, () => { 
    console.log('listening on: http://localhost:3003')
})