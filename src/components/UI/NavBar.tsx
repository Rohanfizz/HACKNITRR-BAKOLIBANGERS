import { Box, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import FaceIcon from "@mui/icons-material/Face";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LogoutIcon from "@mui/icons-material/Logout";
import RoomIcon from "@mui/icons-material/Room";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../store";
import { useRouter } from "next/router";

const NavBar: React.FC = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(authSliceActions.logout());
    router.replace("/");
  };

  return (
    <Box
      w="100%"
      h="3.5rem"
      bgColor={"gray.700"}
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
            <PsychologyIcon sx={{ fontSize: 55 }} />
          </Link>
        </Box>
        <Flex
          // bgColor={"red"}
          height="100%"
          width="20%"
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
            <Button bgColor="transparent" onClick={onClickHandler}>
              <LogoutIcon sx={{ fontSize: 40 }} />
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
export default NavBar;
