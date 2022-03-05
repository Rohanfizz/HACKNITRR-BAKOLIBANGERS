import { NextPage } from "next";
import Intro from "../../src/components/HomePage/Intro";
import TimelineTest from "../../src/components/HomePage/Timeline";
// import Image from "next/image";

const Home: NextPage = () => {
    return (
        <>
        <Intro/>
        <TimelineTest/>
        </>
    );
};

export default Home;
