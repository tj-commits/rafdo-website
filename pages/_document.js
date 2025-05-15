import Document, { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/next"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script defer src="/script.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <Analytics />
       </body>
      </Html>
    );
  }
}

export default MyDocument;