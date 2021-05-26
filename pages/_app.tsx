import React from "react";
import { AppComponentType, Container } from "next/app";

const App: AppComponentType = ({ Component }) => {
  return (
    <Container>
      <Component />
    </Container>
  );
};

App.getInitialProps = async ({ Component, ctx, router }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  console.log("router: ", router);

  return { pageProps };
};

export default App;
