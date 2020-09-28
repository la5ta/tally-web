import { useEnvironment } from '@lib/relay';
import React from 'react';
import { ReactRelayContext } from 'react-relay';

import '@styles/antd.less';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }) {
  const environment = useEnvironment(pageProps.initialRecords);

  return (
    <ReactRelayContext.Provider value={{ environment }}>
      <Component {...pageProps} />
    </ReactRelayContext.Provider>
  );
}