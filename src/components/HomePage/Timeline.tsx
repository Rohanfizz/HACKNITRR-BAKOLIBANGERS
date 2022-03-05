import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import TimelineComponent from "./TimelineComponent";

const TimelineTest: React.FC = () => {
    return (
        <Box w="100%" h="100%" bgColor="tealLight">
            <Grid
                height="100%"
                templateColumns={"repeat(4, 1fr)"}
                templateRows={"repeat(1, 1fr)"}
                bgColor="lightblue"
            >
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
                <GridItem colSpan={2} height="100%">
                    <Flex
                    h="100%"
                    w="100%"
                    // bgColor="red"
                        alignItems={"center"}
                        justifyContent="center"
                        position="relative"
                        // top="calc(( 100% - 10rem )/2)"
                        // right=" calc(( 100% - 100rem) / 2) "
                    >
                       <TimelineComponent/>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default TimelineTest;