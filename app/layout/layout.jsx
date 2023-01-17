import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollTop from "../components/scroll-top/ScrollTop";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            <ScrollTop />
        </>
    )
}