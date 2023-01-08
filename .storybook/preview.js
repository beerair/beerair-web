import { Global, css, ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import ReactQueryClientProvider from '@/components/QueryClientProvider';

import { theme, GlobalStyle } from '../src/themes';
import MainLayout from '../src/components/layouts/MainLayout';

const customViewports = {
  full: {
    name: 'Full Screen',
    styles: {
      width: '100%',
      height: '100%',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS, ...customViewports },
    defaultViewport: 'iphone12',
  },
  layout: 'fullscreen',
  options: {
    storySort: {
      order: ['Design System', 'Commons', 'Components', 'Pages'],
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <ReactQueryClientProvider>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          <Global
            styles={css`
              html,
              #root {
                height: 100%;
              }

              body {
                height: 100%;
                padding: 0 !important;
                background-color: ${theme.semanticColor.background};
              }
            `}
          />
          <MainLayout>
            <Story />
          </MainLayout>
        </ThemeProvider>
      </RecoilRoot>
    </ReactQueryClientProvider>
  ),
];
