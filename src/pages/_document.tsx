import Document, { Html, Head, Main, NextScript } from "next/document";

export default class myDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" type="text/css" href="/css/duDatepicker.min.css"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
            rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/duDatepicker.min.js"></script>
          <script src="/js/script.js"></script>
        </body>
      </Html>
    );
  }
}
