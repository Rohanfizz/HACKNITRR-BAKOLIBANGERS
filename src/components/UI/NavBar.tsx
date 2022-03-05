import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import FaceIcon from "@mui/icons-material/Face";

const NavBar: React.FC = ({ children }) => {
    return (
        <Box w="100%" h="3.5rem" bgColor={"darker"} color="white" fontSize="2xl">
            <Flex
                justifyContent={"space-between"}
                paddingLeft="2rem"
                paddingRight="2rem"
                alignItems="center"
                h="100%"
            >
                {/* <Image src="" alt="LOGO" width="1rem" height="1rem"/> */}
                <Box>
                    <Link href="/">Logo</Link>
                </Box>
                <Flex
                    // bgColor={"red"}
                    height="100%"
                    width="30%"
                    alignItems="center"
                    justifyContent={"space-evenly"}
                >
                    <Box>
                        <Link href="/therapists-near-you">
                            Therapists Near you
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/profile">
                            <FaceIcon sx={{ fontSize: 40 }} />
                        </Link>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};
export default NavBar;
