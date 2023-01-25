import Image from "next/image"
import Link from "next/link"
import styles from './ServicesItem.module.scss'
const ServicesItem = ({ item }) => {
    return (
        <Link href={`services/${item.link}`} className={styles.item}>
            <img src={item.img.url} alt="" />
            <div className={styles.name}>{item.name}</div>
        </Link>
    )
}
export default ServicesItem
