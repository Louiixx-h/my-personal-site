require('dotenv').config()
const nodemailer = require('nodemailer')

const user = process.env.MY_EMAIL
const password = process.env.PASSWORD

console.log(user)
console.log(password)

module.exports = (email, subject, content) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.umbler.com',
        port: '587',
        auth: {
            user: user, 
            pass: password
        }
    })

    transporter.sendMail({
        from: user,
        to: user,
        replyTo: email,
        subject: subject,
        text: content
    }).then(info => {
        console.log(info)
    }).catch(err => {
        console.error(err)
    })
}