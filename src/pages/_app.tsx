import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

import { theme, GlobalStyle } from '@/themes';
import awesome from '@/utils/awesome';

awesome();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
