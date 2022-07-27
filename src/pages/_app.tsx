import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';

import { theme, GlobalStyle } from '@/themes';
import awesome from '@/utils/awesome';
import ReactQueryClientProvider from '@/commons/QueryClientProvideer';
import { Hydrate } from 'react-query';

awesome();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryClientProvider>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} />
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
      </Hydrate>
    </ReactQueryClientProvider>
  );
}

export default MyApp;
