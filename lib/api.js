import axios from "axios"

export const sendContactForm = async (form) => {
    try {
        const res = await axios.post('/api/contact', form, {
            // headers: {
            //     'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
            // }
        })
        return res.data
    } catch (error) {
        return console.log(error)
    }
}
