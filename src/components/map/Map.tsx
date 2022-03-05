import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Map: React.FC<{}> = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return (
    <Flex alignItems={'center'} justifyContent={'center'} flexDirection='column'>
       <Heading>Therapists Near You</Heading>
      <Flex height="500px" width="500px" sx={{ border: "3px solid" }} ></Flex>
    </Flex>
  );
};

export default Map;
