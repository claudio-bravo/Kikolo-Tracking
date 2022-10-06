import { AppProps } from "next/app";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
