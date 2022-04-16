import { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import ThemeConfig from "themes/";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "utils/";
import { SWRConfig } from "swr";
import { Navigation, Footer } from "components/surface";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import { useRouter } from "next/router";

const clientSideEmotionCache = createEmotionCache();

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();

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
            <SnackbarProvider
              dense
              maxSnack={3}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              TransitionComponent={Slide}
            >
              {router.asPath === "/dashboard" ? (
                <Component {...pageProps} />
              ) : (
                <Navigation>
                  <Component {...pageProps} />
                  <Footer />
                </Navigation>
              )}
            </SnackbarProvider>
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
