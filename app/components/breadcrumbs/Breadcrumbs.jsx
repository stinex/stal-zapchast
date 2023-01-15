import Link from "next/link"
import styles from './Breadcrumbs.module.scss'

const Breadcrumbs = ({ page }) => {
    return (
        <ul className={styles.breadcrumbs}>
            <li>
                <Link className={styles.active} href='/'>
                    На главную
                </Link>
            </li>
            /
            <li>
                <Link href='#'>
                    {page}
                </Link>
            </li>
        </ul>
    )
}
export default Breadcrumbs