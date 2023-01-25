import multer from 'multer'
import nc from 'next-connect'
import { mailOptions, transporter } from "../../config/nodemailer";

export const config = {
    api: {
        bodyParser: false
    }
}

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'public/uploads')
        },
        filename: (req, file, cb) => {
            cb(null, new Date().getTime() + '-' + file.originalname)
        }
    })
})

const handler = nc({
    onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Something broke!");
    },
    onNoMatch: (req, res, next) => {
        res.status(404).end("Page is not found");
    },
})
    .use(upload.single('file'))
    .post(async (req, res) => {
        const { email, phone, name, type } = req.body

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: type === 'requestСall'? 'Заявка на звонок с сайта' : 'Заявка на расчет стоимости с сайта',
                text: 'Заказ с сайта',
                html: `
                Имя клинета: ${name} <br/>
                Телефон клинета: ${phone} <br/>
                ${email != 'null' ? `Email клинета: ${email}` : ''}
                `,
                attachments: req.file ? [
                    {
                        filename: req.file.filename,
                        path: req.file.path
                    }
                ] : ''
            })
            res.status(201).json({ body: req.body, file: req.file });
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    })
export default handler