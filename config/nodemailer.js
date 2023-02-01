import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    sender: 'gmail',
    auth: {
        user: 'metalldetal74@gmail.com',
        pass: 'feikhauaakdjozwq'
    }
})

export const mailOptions = {
    from: 'metalldetal74@gmail.com',
    to: 'zapchast_174@bk.ru',
}