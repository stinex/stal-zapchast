import { useEffect, useState } from 'react'
import { sendContactForm } from '../../../lib/api'
import Check from '../../assets/images/svg/Check'
import Done from '../../assets/images/svg/Done'
import styles from './Form.module.scss'

const Form = ({ title, type = null }) => {
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState(null)
    const [file, setFile] = useState(null)
    const [checked, setChecked] = useState(true)
    const [submit, setSubmit] = useState(false)

    const [sendFrom, setSendFrom] = useState(false)

    const [errorFile, setErrorFile] = useState(null)
    const [errorName, setErrorName] = useState(null)
    const [errorPhone, setErrorPhone] = useState(null)
    const [errorChecked, setErrorChecked] = useState(null)


    const phoneFormat = (str) => {
        if (str === '')
            return
        str = str.replace(/\D/g, '');
        let format = '';
        if (!str) {
            return '';
        }
        if (str[0] === '9') {
            str = '7' + str;
        }
        format = '+7';
        if (str.length > 1) {
            format += ' (' + str.substring(1, 4);
        }
        if (str.length >= 5) {
            format += ') ' + str.substring(4, 7);
        }
        if (str.length >= 8) {
            format += '-' + str.substring(7, 9);
        }
        if (str.length >= 10) {
            format += '-' + str.substring(9, 11);
        }

        return format;
    };



    const handlerSubmit = async () => {
        if (file && file.size > 23000000)
            return
        if (errorName === null && name != null && errorPhone === null && phone.length >= 18 && errorChecked === null && checked === true) {

            const form = new FormData()
            form.append('name', name)
            form.append('phone', phone)
            form.append('email', email)
            form.append('file', file)
            form.append('type', type)

            const res = await sendContactForm(form)

            if (res.body)
                setSendFrom(true)
        }
    }

    useEffect(() => {

        if (phone) {
            setPhone(phoneFormat(phone))
        }

        if (file && file.size > 23000000) {
            setErrorFile('Размер файла превышает 25 МБ.')
        } else {
            setErrorFile(null)
        }

        if (!submit)
            return

        // checked
        if (checked === false) {
            setErrorChecked('Просить принять слглашение')
        } else {
            setErrorChecked(null)
        }
        // name
        if (name <= 0 || name === undefined || name === null) {
            setErrorName('Заполните поле')
        } else {
            setErrorName(null)
        }
        // phone
        if (phone <= 0 || phone === undefined || phone === null) {
            setErrorPhone('Заполните поле')
        } else if (phone.length < 18) {
            setErrorPhone('Неверный номер телефона')
        } else {
            setErrorPhone(null)
        }
    }, [name, phone, email, file, checked, submit])


    if (sendFrom) {
        return (
            <div className={styles.done}>
                <Done />
                <h5 className={styles.done_title}>
                    Спасибо за заявку
                </h5>
                <p className={styles.done_descriptopn}>
                    Мы уже обрабатываем вашу заявку и в ближайшее время свяжемся с вами для уточнения деталей
                </p>
            </div>
        )
    }

    if (type === 'requestСall') {
        return (
            <>
                <div className={styles.title}>
                    {title}
                </div>

                <label htmlFor="name" className={styles.label}>
                    Имя *
                    <input onChange={e => setName(e.target.value)} type="text" id="name" name='name' className={styles.input} placeholder='Ваше имя' />
                    {
                        errorName && <p className={styles.error}>{errorName}</p>
                    }
                </label>

                <label htmlFor="phone" className={styles.label}>
                    Телефон *
                    <input onChange={e => setPhone(e.target.value)} type="text" value={phone} id="phone" name='phone' className={styles.input} placeholder='Ваш номер телефона' />
                    {
                        errorPhone && <p className={styles.error}>{errorPhone}</p>
                    }
                </label>
                <p className={styles.checkbox}>
                    <input checked={checked} onChange={e => setChecked(!checked)} type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">
                        <Check />
                    </label>
                    Я принимаю условия конфиденциальности
                    {
                        errorChecked && <p className={styles.error}>{errorChecked}</p>
                    }
                </p>
                <input type="button" onClick={() => { setSubmit(true); handlerSubmit(); }} className={styles.submit} value="Заказать звонок" />
            </>
        )
    }

    return (
        <>
            <div className={styles.title}>
                {title}
            </div>

            <label htmlFor="name" className={styles.label}>
                Имя *
                <input onChange={e => setName(e.target.value)} type="text" id="name" name='name' className={styles.input} placeholder='Ваше имя' />
                {
                    errorName && <p className={styles.error}>{errorName}</p>
                }
            </label>


            <label htmlFor="phone" className={styles.label}>
                Телефон *
                <input onChange={e => setPhone(e.target.value)} type="text" value={phone} id="phone" name='phone' className={styles.input} placeholder='Ваш номер телефона' />
                {
                    errorPhone && <p className={styles.error}>{errorPhone}</p>
                }
            </label>

            <label onChange={e => setEmail(e.target.value)} htmlFor="email" className={styles.label}>
                Email
                <input type="email" id="email" name='email' className={styles.input} placeholder='Ваш email' />
            </label>

            <label htmlFor="file" className={styles.label}>
                Выбрать файл
                <span className={styles.file}>
                    {
                        file ? 'Файл загружен' : ' Загрузить файл'
                    }
                    <input onChange={e => setFile(e.target.files[0])} type="file" id="file" name='file' />
                </span>
                {
                    errorFile && <p className={styles.error}>{errorFile}</p>
                }
            </label>

            <p className={styles.checkbox}>
                <input checked={checked} onChange={e => setChecked(!checked)} type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                    <Check />
                </label>
                Я принимаю условия конфиденциальности
                {
                    errorChecked && <p className={styles.error}>{errorChecked}</p>
                }
            </p>

            <input type="button" onClick={() => { setSubmit(true); handlerSubmit(); }} className={styles.submit} value="Отправить" />
        </>
    )
}
export default Form
