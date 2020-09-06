import React from "react";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import "@brainhubeu/react-carousel/lib/style.css";

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
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <title>Anish Agnihotri</title>
        <meta name="title" content="Anish Agnihotri" />
        <meta
          name="description"
          content="Anish Agnihotri is a 17 y/o developer from Toronto, Canada who likes to build software. He's most passionate about Blockchain & Economics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://anishagnihotri.com" />
        <meta property="og:title" content="Anish Agnihotri" />
        <meta
          property="og:description"
          content="Anish Agnihotri is a 17 y/o developer from Toronto, Canada who likes to build software. He's most passionate about Blockchain & Economics."
        />
        <meta
          property="og:image"
          content="https://anishagnihotri.com/head/meta.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Anish Agnihotri" />
        <meta
          property="twitter:description"
          content="Anish Agnihotri is a 17 y/o developer from Toronto, Canada who likes to build software. He's most passionate about Blockchain & Economics."
        />
        <meta
          property="twitter:image"
          content="https://anishagnihotri.com/head/meta.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/head/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/head/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/head/favicon-16x16.png"
        />
        <link rel="manifest" href="/head/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/head/safari-pinned-tab.svg"
          color="#ffb41f"
        />
        <link rel="shortcut icon" href="/head/favicon.ico" />
        <meta name="msapplication-TileColor" content="#f7faff" />
        <meta name="msapplication-config" content="/head/browserconfig.xml" />
        <meta name="theme-color" content="#f7faff" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-177315240-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-177315240-1');
            `,
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </React.Fragment>
  );
}
