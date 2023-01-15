import Link from "next/link"
import { Link as ScrollLink } from 'react-scroll'

const MenuItem = ({ item }) => {
    if (item.link === 'contacts') {
        return (
            <li>
                <Link href={item.link} >
                    {item.name}
                </Link>
            </li>
        )
    }
    else {
        return (
            <li>
                <ScrollLink to={item.link} smooth={true}>
                    {item.name}
                </ScrollLink>
            </li>
        )
    }
}
export default MenuItem