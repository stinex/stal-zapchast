import styles from './ScrollTop.module.scss'
import ScrollUp from '../../assets/images/svg/ScrollUp'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
const ScrollTop = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className={`${styles.scroll_top} container ${scroll >= 600 ? styles.visible : ''}`}>
            {/* Наверх */}
            <Link href="#" to='__next' smooth={true}>
                <ScrollUp />
            </Link>
        </div>
    )
}
export default ScrollTop