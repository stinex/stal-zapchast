
import MenuItem from './menu-item/MenuItem'
import styles from './Menu.module.scss'
import { menu } from './menu-data.js'

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul>
                {menu?.map(item => (<MenuItem key={item.link} item={item} />))}
            </ul>
        </nav>
    )
}
export default Menu