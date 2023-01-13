import Form from '../../form/Form'
import styles from './FormBlock.module.scss'
import styles_f from '../../form/Form.module.scss'

const FormBlock = () => {
    return (
        <div className={styles.from_block}>
            <div className="container">
                <div className={styles_f.form__wrapper}>
                    <Form title='Закажите расчет стоимости вашего заказа' />
                </div>
            </div>
        </div>
    )
}
export default FormBlock
