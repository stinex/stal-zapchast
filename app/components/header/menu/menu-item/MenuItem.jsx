import Link from "next/link"

const MenuItem = ({ item }) => {
    return (
        <li>
            <Link href={item.link}>
                {item.name}
            </Link>
        </li>
    )
}
export default MenuItem