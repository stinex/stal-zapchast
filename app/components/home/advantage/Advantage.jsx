
import { advantage } from './advantage-data'
import AdvantageItem from './advantage-item/AdvantageItem'
import styles from './Advantage.module.scss'
const Advantage = () => {
    return (
        <div className="container">
            <div className={styles.advantage}>
                <h2 className={styles.title}>
                    Почему именно мы
                </h2>
                <p className={styles.description}>
                    Что вы получите, заказав металлообработку именно у нас
                </p>
                <div className={styles.advantage_wrapper}>
                    {advantage.map(item => { return <AdvantageItem key={item.title} item={item} /> })}
                </div>
            </div>
        </div>
    )
}
export default Advantage