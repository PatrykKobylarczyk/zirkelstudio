import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AnimatePresence mode='wait' >
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </AnimatePresence>
    </RecoilRoot>
  );
}
