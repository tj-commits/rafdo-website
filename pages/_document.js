import Document, { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/next"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script defer src="/script.js"></script>
          <Analytics />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;