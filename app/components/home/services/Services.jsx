import styles from './Services.module.scss'
import ServicesItem from './services-item/ServicesItem'

const Services = ({ services }) => {
    return (
        <div className={styles.services} >
            <div className="container" id='services'>
                <h4 className={styles.title}>
                    Наши услуги
                </h4>
                <div className={styles.services_wrapper}>
                    {services.map(item => { return <ServicesItem key={item.name} item={item} /> })}
                </div>
            </div>
        </div>
    )
}
export default Services
