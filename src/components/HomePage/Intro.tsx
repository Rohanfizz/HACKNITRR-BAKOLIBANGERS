import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
// import Image from "next/image";

const Intro: React.FC = () => {
    return (
        <Box w="100%" h="100%" bgColor="tealLight">
            <Grid
                height="100%"
                templateColumns={"repeat(4, 1fr)"}
                templateRows={"repeat(1, 1fr)"}
            >
                <GridItem colSpan={2} height="100%">
                    <Flex
                        alignItems={"center"}
                        justifyContent="flex-start"
                        position="relative"
                        // top="calc(( 100% - 10rem )/2)"
                        // right=" calc(( 100% - 100rem) / 2) "
                    >
                        <Image
                            src="/homeImage.png"
                            alt="homeImage"
                            height="100%"
                            width="100%"
                        />
                    </Flex>
                </GridItem>
                <GridItem colSpan={2}>
                    <Flex
                        fontSize={"8xl"}
                        alignItems="center"
                        justifyContent={"center"}
                    >
                        <Text>
                            The Indian population is gravely suffering when it
                            comes to their mental health
                        </Text>
                    </Flex>
                    {/* <Flex fontSize={"7xl"}>The Indian population is gravely suffering when it comes to their mental health</Flex> */}
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Intro;
