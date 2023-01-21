import Link from "next/link"
import { useRouter } from 'next/router'
import { Link as ScrollLink } from 'react-scroll'

const MenuItem = ({ item }) => {
    const router = useRouter()

    if (item.link === 'contacts' || item.link === '/') {
        return (
            <li>
                <Link href={`/${item.link}`} >
                    {item.name}
                </Link>
            </li>
        )
    }
    else if (router.route === '/') {
        return (
            <li>
                <ScrollLink spy={true} to={item.link} smooth={true}>
                    {item.name}
                </ScrollLink>
            </li>
        )
    } else {
        return (
            <li>
                <Link href={`/#${item.link}`} >
                    {item.name}
                </Link>
            </li>
        )
    }
}
export default MenuItem