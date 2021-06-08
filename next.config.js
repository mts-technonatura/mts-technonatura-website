'use strict';
const glob = require('glob');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const withPWA = require('next-pwa');
const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const {
  monthConversion,
  dayConversion,
  timeConversion,
} = require('./utils/timeconversion');
const getDate = new Date();

const NODE_ENV = process.env.NODE_ENV;
const dualENV = {
  production: {
    PUBLIC_URL: 'https://dashboard.mts-technonatura.vercel.app',
  },
  development: {
    PUBLIC_URL: 'http://localhost:3000',
  },
  signup: process.env.NEXT_PUBLIC_SIGNUP_API,
};

const env = {
  ...dualENV[NODE_ENV],
  isProduction: NODE_ENV === 'production',
};

// next.js configuration
const nextConfig = {
  pageExtensions: [
    'page.js',
    'page.tsx',
    'tsx',
    'page.jsx',
    'cpage.tsx',
    'api.js',
    'api.ts',
    '_app.js',
    '_document.js',
  ],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'If-Modified-Since',
            value: `${dayConversion(
              getDate.getDay(),
            )}, ${getDate.getDate()} ${monthConversion(
              getDate.getMonth(),
            )} ${getDate.getFullYear()} ${timeConversion(
              getDate.getHours(),
            )}:${timeConversion(getDate.getMinutes())}:${timeConversion(
              getDate.getSeconds(),
            )} GMT`, // <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT | https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/dev',
        destination: 'https://dev.mts-technonatura.vercel.app',
        permanent: true,
      },
      ,
      {
        source: '/yt',
        destination: process.env.yt,
        permanent: true,
      },
      {
        source: '/discuss',
        destination: 'https://forum.mts-technonatura.vercel.app',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/mts-technonatura',
        permanent: true,
      },
      {
        source: '/discord',
        destination: process.env.discord,
        permanent: true,
      },
      {
        source: '/settings/cookies',
        destination: '/dashboard/settings/',
        permanent: true,
      },
      {
        source: '/settings/cookie',
        destination: '/dashboard/settings/',
        permanent: true,
      },
      {
        source: '/settings',
        destination: '/dashboard/settings',
        permanent: true,
      },
      {
        source: '/setting',
        destination: '/dashboard/settings',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/sitemap-robots-generator')(env.PUBLIC_URL);
    }

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
  env,
};

const plugins = [
  [
    optimizedImages,
    {
      inlineImageLimit: 8192,
      imagesFolder: 'images',
      imagesName: '[name]-[hash].[ext]',
      handleImages: ['jpeg', 'png', 'webp'],
      removeOriginalExtension: false,
      optimizeImages: true,
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 80,
      },
      optipng: {
        optimizationLevel: 3,
      },
      pngquant: false,
      webp: {
        preset: 'default',
        quality: 75,
      },
    },
  ],
  [
    withCss,
    [
      withPurgeCss({
        purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer,
        purgeCssPaths: ['pages/**/*', 'components/**/*'],
        purgeCss: {
          whitelist: () => whitelist,
        },
      }),
    ],
  ],
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
      },
    },
  ],
];

module.exports = withPlugins([...plugins], nextConfig);
