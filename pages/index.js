
import { GraphQLClient, gql } from "graphql-request"

import Home from "../app/screens/home/Home";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      'Authorization': process.env.GRAPH_CMS_TOKEN
    }
  })
  const query = gql`
        query{
            services {
              fullName
              name
              link
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

  const data = await graphQLClient.request(query)
  const services = data.services

  return {
    props: {
      services
    }
  }
}
const HomePage = ({ services }) => {
  return <Home services={services} />
}
export default HomePage