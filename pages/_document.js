import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>{/* Place any meta tags or links here if needed */}</Head>
      <body>
        <div id="overlays"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
