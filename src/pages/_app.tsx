import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import globalStyle from "../styles/global";
import reset from "../styles/reset";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={reset} />
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}
