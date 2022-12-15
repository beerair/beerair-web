import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { Hydrate } from 'react-query';

import { theme, GlobalStyle } from '@/themes';
import awesome from '@/utils/awesome';
import ReactQueryClientProvider from '@/components/QueryClientProvider';
import MainLayout from '@/components/layouts/MainLayout';

awesome();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryClientProvider>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme} />
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ThemeProvider>
        </RecoilRoot>
      </Hydrate>
    </ReactQueryClientProvider>
  );
}

export default MyApp;
