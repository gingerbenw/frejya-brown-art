import React from 'react';
import App, { Container } from 'next/app';

// Components
import Header from '../components/Header';

// Global data
import data from '../data.json';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Header />
        <Component {...pageProps} {...data} />
      </Container>
    );
  }
}

export default MyApp;
