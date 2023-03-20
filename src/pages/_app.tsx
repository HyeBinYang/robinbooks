import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Header from "../components/base/Header";
import MainCategoryTab from "../components/base/MainCategoryTab";
import MainTab from "../components/base/MainTab";
import SubCategoryTab from "../components/base/SubCategoryTab";
import globalStyle from "../styles/global";
import reset from "../styles/reset";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={reset} />
      <Global styles={globalStyle} />
      <MainTab />
      <Header />
      <MainCategoryTab />
      <SubCategoryTab />
      <Component {...pageProps} />
    </>
  );
}
