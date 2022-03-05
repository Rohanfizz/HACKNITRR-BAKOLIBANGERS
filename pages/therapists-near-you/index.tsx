import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { NextPage } from "next";
import Map from "../../src/components/map/Map";

const render = (Status: Status) => {
    return <h1>{Status}</h1>;
}

const Tny:NextPage = () => {
    return (
        <Wrapper apiKey={'maps'}  render={render}>
            <Map></Map>
        </Wrapper>
    )
}

export default Tny;