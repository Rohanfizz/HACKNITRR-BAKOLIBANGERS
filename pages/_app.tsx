import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/UI/Layout";
import { theme1 } from "../src/theme/themes";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme1}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;
