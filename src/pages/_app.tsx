import { ChakraProvider } from "@chakra-ui/react";
import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "../RelayEnvironment";
import theme from "../theme";

function MyApp({ Component, pageProps }: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading..."}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
