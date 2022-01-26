import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import ThemeConfig from "themes/";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "utils/";
import { SWRConfig } from "swr";
import { Navigation } from "components/surface";

const clientSideEmotionCache = createEmotionCache();
export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeConfig>
        {/* <CssBaseline /> */}
        <SWRConfig
          value={{
            fetcher: (url) => fetch(url).then((r) => r.json()),
          }}
        >
          <Navigation>
            <Component {...pageProps} />
          </Navigation>
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
