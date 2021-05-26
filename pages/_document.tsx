import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document<{ styleTags: JSX.Element[] }> {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          {this.props.styleTags}
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/static/images/hoja.ico" />
          <link
            rel=" apple-touch-icon "
            href="/static/images/touch-icon.png "
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ({ renderPage }) => {
  const sheet = new ServerStyleSheet();

  const page = renderPage((App: any) => (props: any) =>
    sheet.collectStyles(<App {...props} />)
  );

  const styleTags = sheet.getStyleElement();

  return { ...page, styleTags };
};
