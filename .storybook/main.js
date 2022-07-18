const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  core: {
    builder: 'webpack5',
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    'storybook-addon-next-router',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 120, singleQuote: true },
        },
      },
    },
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    /**
     * 동일한 이슈가 있어 comment에 있는 solution대로 적용
     * https://github.com/storybookjs/storybook/issues/16690
     */
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    /**
     * webpack5 버전 업 이후 svg파일에서 에러가 발생해 아래 블로그 참고
     * https://minemanemo.tistory.com/161
     */
    const fileLoaderRule = config.module.rules.find((rule) => rule?.test?.test?.('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
