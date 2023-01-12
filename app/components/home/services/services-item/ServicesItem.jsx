import Image from "next/image"
import Link from "next/link"
import styles from './ServicesItem.module.scss'
const ServicesItem = ({ item }) => {
    return (
        <Link href={item.link} className={styles.item}>
            <Image className={styles.img} src={item.img} alt={item.name} />
            <div className={styles.name}>{item.name}</div>
        </Link>
    )
}
export default ServicesItem
