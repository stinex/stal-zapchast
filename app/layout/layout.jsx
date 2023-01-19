import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollTop from "../components/scroll-top/ScrollTop";
import ModalProvider from "../components/modal/ModalContext";

export default function Layout({ children }) {
    return (
        <ModalProvider >
            <Header />
            <main >
                {children}
            </main>
            <Footer />
            <ScrollTop />
        </ModalProvider>
    )
}