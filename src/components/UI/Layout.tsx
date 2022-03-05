import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
};
export default Layout;
