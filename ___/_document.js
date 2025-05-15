import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Rafdo</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        <!-- Cloudflare Web Analytics --><script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "ffe5cfc1778e4fd0b5546e52ee785111"}'></script><!-- End Cloudflare Web Analytics --></body>
      </Html>
    );
  }
}

export default MyDocument;
