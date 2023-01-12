import styles from './AdvantageItem.module.scss'
const AdvantageItem = ({ item }) => {
    return (
        <div className={styles.item}>
            <div className={styles.icon}>
                {item.img}
            </div>
            <div className={styles.title}>
                {item.title}
            </div>
            <div className={styles.decription}>
                {item.decription}
            </div>
        </div>
    )
}
export default AdvantageItem