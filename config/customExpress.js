const express = require('express')
const consign = require('consign')
const path = require('path');

module.exports = () => {
    const app = express()

    app.use(express.static(path.join(__dirname + '/../public')));
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    consign()
        .include('controllers')
        .into(app)

    return app
}