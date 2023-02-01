import axios from "axios"

export const sendContactForm = async (form) => {
    try {
        const res = await axios.post('/api/contact', form, {
            headers: {
                'Content-Type': 'multipart/form-data;'
            }
        })
        return res.data
    } catch (error) {
        return console.log(error)
    }
}
