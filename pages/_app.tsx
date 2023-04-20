import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  const ref = useRef(null);

  return (
    <LocomotiveScrollProvider options={{ smooth: true }} containerRef={ref}>
      <main data-scroll-container ref={ref} className="smooth-scroll">
        <RecoilRoot>
          <Navbar>
            <AnimatePresence mode="wait">
              <Component key={router.pathname} {...pageProps} />
            </AnimatePresence>
          </Navbar>
        </RecoilRoot>
      </main>
    </LocomotiveScrollProvider>
  );
}
