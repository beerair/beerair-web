import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import { theme, GlobalStyle } from '@/themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
