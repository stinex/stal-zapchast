import Meta from "./Meta/Meta";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollTop from "../components/scroll-top/ScrollTop";
// import ModalProvider from "../components/modal/ModalContext";

const Layout = ({ children, ...rest }) => {
    return (
        <>
            <Meta {...rest} />
            {/* <ModalProvider > */}
            <Header />
            <main >
                {children}
            </main>
            <Footer />
            <ScrollTop />
            {/* </ModalProvider> */}
        </>
    )
}
export default Layout