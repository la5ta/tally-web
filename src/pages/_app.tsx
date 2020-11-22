import { useEnvironment } from '@lib/relay';
import React from 'react';
import { ReactRelayContext } from 'react-relay';
import { DefaultSeo } from 'next-seo';
import SEO from '@config/seo';

import "@styles/App.scss";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }) {
  const environment = useEnvironment(pageProps.initialRecords);

  return (
    <ReactRelayContext.Provider value={{ environment }}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ReactRelayContext.Provider>
  );
}

