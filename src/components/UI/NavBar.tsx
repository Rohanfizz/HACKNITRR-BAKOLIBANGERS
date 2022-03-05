import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import FaceIcon from "@mui/icons-material/Face";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LogoutIcon from "@mui/icons-material/Logout";
import RoomIcon from "@mui/icons-material/Room";

const NavBar: React.FC = ({ children }) => {
    return (
        <Box
            w="100%"
            h="3.5rem"
            bgColor={"darker"}
            fontFamily="heading"
            color="white"
            fontSize="2xl"
        >
            <Flex
                justifyContent={"space-between"}
                paddingLeft="2rem"
                paddingRight="0rem"
                alignItems="center"
                h="100%"
            >
                <Box display="flex" justifyContent="center">
                    <Link href="/">
                        <PsychologyIcon sx={{ fontSize: 50 }} />
                    </Link>
                </Box>
                <Flex
                    // bgColor={"red"}
                    height="100%"
                    width="30%"
                    alignItems="center"
                    justifyContent={"space-evenly"}
                >
                    <Box display="flex" alignItems={"center"}>
                        <Link href="/therapists-near-you">
                            <RoomIcon sx={{ fontSize: 40 }} />
                        </Link>
                    </Box>
                    <Box display="flex" alignItems={"center"}>
                        <Link href="/profile">
                            <FaceIcon sx={{ fontSize: 40 }} />
                        </Link>
                    </Box>
                    <Box>
                        <Button bgColor="transparent">
                            <LogoutIcon sx={{ fontSize: 40 }} />
                        </Button>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};
export default NavBar;
