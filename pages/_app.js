import '../app/assets/styles/globals.scss'

import ModalProvider from '../app/components/modal/ModalContext'

const App = ({ Component, pageProps }) => {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}
export default App