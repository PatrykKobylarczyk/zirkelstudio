import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <RecoilRoot>
      <Navbar>
        <AnimatePresence mode="wait" >
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </Navbar>
    </RecoilRoot>
  );
}
