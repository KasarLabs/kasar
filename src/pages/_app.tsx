import { Suspense } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import { StarknetConfig, InjectedConnector } from "@starknet-react/core";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../theme/";
import { UserProvider } from "../context";
import GlobalStyle from "../theme/GlobalStyles";
import "../style/style.css";

export default function App({ Component, pageProps }: AppProps) {
  const connectors = [new InjectedConnector({ options: { id: "argentX" } })];
  const theme = lightTheme;
  const router = useRouter();

  const classSlide = router.pathname === "/" ? "slide-in" : "slide-out";
  const classSlideOut = router.pathname === "/" ? "slide-out" : "slide-in";
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AnimatePresence mode='wait'>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StarknetConfig connectors={connectors}>
              <motion.div key={router.pathname}>
                <motion.div
                  className={classSlide}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 0 }}
                  exit={{ scaleX: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                ></motion.div>
                <motion.div
                  className={classSlideOut}
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                ></motion.div>
                <Component {...pageProps} />
              </motion.div>
            </StarknetConfig>
          </ThemeProvider>
        </UserProvider>
      </AnimatePresence>
    </Suspense>
  );
}
