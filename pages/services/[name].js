import { gql, GraphQLClient } from "graphql-request"

import Services from "../../app/screens/services/Services"

const ServicesPage = ({ service }) => {
    return <Services service={service} />
}

export const getServerSideProps = async (pageContext) => {
    const url = process.env.ENDPOINT

    const graphQLClient = new GraphQLClient(url, {
        headers: {
            'Authorization': process.env.GRAPH_CMS_TOKEN
        }
    })

    const pageLink = pageContext.query.name

    const query = gql`
        query($pageLink: String!){
          service(where:  {
            link: $pageLink
         }){
              fullName
              name
              img{
                url
              }
              bg1920{
                url
              }
              bg768{
                url
              }
              bg375{
                url
              }
              images{
                url
              }
        }
    }`

    const variables = {
        pageLink,
    }

    const data = await graphQLClient.request(query, variables)
    const service = data.service

    return {
        props: {
            service
        },
        revalidate: 10
    }
}
export default ServicesPage