import React from "react";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bluu';
    src: url('/fonts/Bluu-Suuperstar-Bold.woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "AmericaRegular";
    src: url('/fonts/GT-America-Regular.woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "AmericaBold";
    src: url('/fonts/GT-America-Bold.woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "AmericaMono";
    src: url('/fonts/GT-America-Mono-Medium.woff2');
    font-weight: medium;
    font-style: normal;
    font-display: swap;
  }

  body {
    background-color: #f7faff;
    margin: 0px;
    padding-bottom: 500px;
  }
`;

export default function Portfolio({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link
          href="/fonts/GT-America-Regular.woff2"
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <link
          href="/fonts/GT-America-Bold.woff2"
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <link
          href="/fonts/GT-America-Mono-Medium.woff2"
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <link
          href="/fonts/Bluu-Suuperstar-Bold.woff2"
          rel="preload"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </React.Fragment>
  );
}
