import { services } from "../../app/assets/data/services-data"
import Services from "../../app/screens/services/Services"


const ServicesPage = ({ service }) => {
    return <Services service={service} />
}

export const getStaticPaths = async () => {
    const paths = services.map(service => {
        return {
            params: { name: service.link }
        }
    })
    return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
    const service = services.find(service => service.link === params?.name)
    return {
        props: {
            service
        }
    }
}
export default ServicesPage