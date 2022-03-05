import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
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
    <Flex alignItems={'center'} justifyContent={'center'} flexDirection='column' bgColor={"blackAlpha.400"}>
       <Heading>Therapists Near You</Heading>
       <Heading color='red'>still working...</Heading>

      <Flex height="500px" width="500px" sx={{ border: "3px solid" }}> </Flex>
      {/* <Image src='/near.webp' width='100%' height='100%' layout="fill"></Image> */}
    </Flex>
  );
};

export default Map;
