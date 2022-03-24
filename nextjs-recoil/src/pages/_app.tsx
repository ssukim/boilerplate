import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import getConfig from 'next/config';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { publicRuntimeConfig } = getConfig();

  const giphy = new GiphyFetch(publicRuntimeConfig.giphyApiKey);

  useEffect(() => {
    const apiCall = async () => {
      const res = await giphy.animate('water', { limit: 20 });
      console.log('🚀 ~ file: _app.tsx ~ line 19 ~ apiCall ~ res', res);
    };

    apiCall();
  }, []);

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
