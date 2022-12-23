import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Hydrate } from 'react-query';
import { RecoilRoot } from 'recoil';

import MainLayout from '@/components/layouts/MainLayout';
import ReactQueryClientProvider from '@/components/QueryClientProvider';
import { theme, GlobalStyle } from '@/themes';
import awesome from '@/utils/awesome';

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
