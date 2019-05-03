import React from 'react';
import App, { Container } from 'next/app';
import { PageTransition } from 'next-page-transitions';
import styled from 'styled-components';

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
      <AppWrapper>
        <Container>
          <Header />
          <PageTransition timeout={500} classNames="page-transition">
            <Component {...pageProps} {...data} />
          </PageTransition>
        </Container>
      </AppWrapper>
    );
  }
}

export default MyApp;

const AppWrapper = styled.div`
  .page-transition-enter {
    opacity: 0;
  }
  .page-transition-enter-active {
    opacity: 1;
    transition: opacity 500ms;
  }
  .page-transition-exit {
    opacity: 1;
  }
  .page-transition-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
`;
