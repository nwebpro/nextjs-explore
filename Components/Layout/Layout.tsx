import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type children = {
    children: any
}

const Layout = ({ children }: children ) => {
    return ( 
        <>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </> 
    );
}
 
export default Layout;