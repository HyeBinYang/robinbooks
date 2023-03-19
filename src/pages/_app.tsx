import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import reset from "../styles/reset";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={reset} />
      <Component {...pageProps} />
    </>
  );
}
