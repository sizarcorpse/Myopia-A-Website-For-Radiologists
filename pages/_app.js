import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import ThemeConfig from "themes/";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "utils/";
import { SWRConfig } from "swr";
import Cookies from "js-cookie";
import { Navigation, Footer } from "components/surface";
import { SessionProvider } from "next-auth/react";
const clientSideEmotionCache = createEmotionCache();
export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeConfig>
        <SWRConfig
          value={{
            fetcher: (url) => fetch(url).then((r) => r.json()),
          }}
        >
          <SessionProvider session={pageProps.session}>
            <Navigation>
              <Component {...pageProps} />
              <Footer />
            </Navigation>
          </SessionProvider>
        </SWRConfig>
      </ThemeConfig>
    </CacheProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
