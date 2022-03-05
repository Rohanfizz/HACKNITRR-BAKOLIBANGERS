import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <NavBar />
            <Box width="100%" height="calc(100vh - 5.5rem)">
            {children}
            </Box>
            <Footer />
        </>
    );
};
export default Layout;
