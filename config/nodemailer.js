import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    sender: 'gmail',
    auth: {
        user: 'stinex.sx@gmail.com',
        pass: 'piuiljowerprjsqf'
    }
})

export const mailOptions = {
    from: 'stinex.sx@gmail.com',
    to: 'stinex.sx@gmail.com',
}