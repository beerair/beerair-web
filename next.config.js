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
          ],
        };
      }
    : undefined;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  pageExtensions: ['page.tsx', 'page.ts'],
  rewrites,
  redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
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
