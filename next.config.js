const intercept = require('intercept-stdout');

const rewrites =
  process.env.NODE_ENV === 'development'
    ? async () => {
        return {
          fallback: [
            {
              source: '/api/:path*',
              destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/:path*`,
            },
            {
              source: '/guest/api/:path*',
              destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/guest/api/:path*`,
            },
          ],
        };
      }
    : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
  rewrites,
  webpack(config) {
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] });
    config.module.rules.push({ test: /\.md$/, use: 'raw-loader' });

    return config;
  },
};

// safely ignore recoil stdout warning messages
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return '';
  }
  return text;
}

// Intercept in dev and prod
intercept(interceptStdout);

module.exports = nextConfig;
