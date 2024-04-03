import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout: React.FC<{children: JSX.Element}> = ( {children} ) => {
    return<>
        <Navigation />
        {children}
        <Footer />
    </>
}

export default Layout;