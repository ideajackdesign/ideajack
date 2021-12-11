import Document, { Html, Head, Main, NextScript } from 'next/document';

import theme from 'theme';

class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter:wght@400,500,700&family=Noto+Sans+JP:wght@400,500,700&display=swap"
          />
          <meta name="theme-color" content={theme.palette.common.black} />
          <link rel="icon" href="/favicon.ico" />
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
