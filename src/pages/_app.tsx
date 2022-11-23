import theme from "@styles/theme";
import { GlobalStyle } from "@styles/GlobalStyle";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Layout from "@components/layout";
import "@assets/fonts/font.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Syllabus</title>
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
