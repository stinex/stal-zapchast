import Layout from '../app/layout/layout'
import '../app/assets/styles/globals.scss'
const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default App