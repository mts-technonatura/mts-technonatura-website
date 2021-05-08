const glob = require('glob');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const { IgnorePlugin, NormalModuleReplacementPlugin } = require('webpack');

const withPWA = require('next-pwa');
const withCss = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const withPlugins = require('next-compose-plugins');

const {
  monthConversion,
  dayConversion,
  timeConversion,
} = require('./utils/timeconversion');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
const themeConfig = buildThemeConfig();

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
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // EUI uses some libraries and features that don't work outside of a
    // browser by default. We need to configure the build so that these
    // features are either ignored or replaced with stub implementations.
    if (isServer) {
      config.externals = config.externals.map((eachExternal) => {
        if (typeof eachExternal !== 'function') {
          return eachExternal;
        }

        return (context, request, callback) => {
          if (
            request.indexOf('@elastic/eui') > -1 ||
            request.indexOf('react-ace') > -1
          ) {
            return callback();
          }

          return eachExternal(context, request, callback);
        };
      });

      // Replace `react-ace` with an empty module on the server.
      // https://webpack.js.org/loaders/null-loader/
      config.module.rules.push({
        test: /react-ace/,
        use: 'null-loader',
      });

      // Mock HTMLElement on the server-side
      const definePluginId = config.plugins.findIndex(
        (p) => p.constructor.name === 'DefinePlugin',
      );

      config.plugins[definePluginId].definitions = {
        ...config.plugins[definePluginId].definitions,
        HTMLElement: function () {},
      };
      require('./utils/sitemap-robots-generator')(env.PUBLIC_URL);
    }

    config.resolve.mainFields = ['module', 'main'];

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

/**
 * Find all EUI themes and construct a theme configuration object.
 *
 * The `copyConfig` key is used to configure CopyWebpackPlugin, which
 * copies the default EUI themes into the `public` directory, injecting a
 * hash into the filename so that when EUI is updated, new copies of the
 * themes will be fetched.
 *
 * The `availableThemes` key is used in the app to includes the themes in
 * the app's `<head>` element, and for theme switching.
 *
 * @return {ThemeConfig}
 */
function buildThemeConfig() {
  const themeFiles = glob.sync(
    path.join(
      __dirname,
      'node_modules',
      '@elastic',
      'eui',
      'dist',
      'eui_theme_*.min.css',
    ),
  );

  const themeConfig = {
    availableThemes: [],
    copyConfig: [],
  };

  for (const each of themeFiles) {
    const basename = path.basename(each, '.min.css');

    const themeId = basename.replace(/^eui_theme_/, '');

    const themeName =
      themeId[0].toUpperCase() + themeId.slice(1).replace(/_/g, ' ');

    const publicPath = `themes/${basename}.${hashFile(each)}.min.css`;
    const toPath = path.join(
      __dirname,
      `public`,
      `themes`,
      `${basename}.${hashFile(each)}.min.css`,
    );

    themeConfig.availableThemes.push({
      id: themeId,
      name: themeName,
      publicPath,
    });

    themeConfig.copyConfig.push({
      from: each,
      to: toPath,
    });
  }

  return themeConfig;
}

/**
 * Given a file, calculate a hash and return the first portion. The number
 * of characters is truncated to match how Webpack generates hashes.
 *
 * @param {string} filePath the absolute path to the file to hash.
 * @return string
 */
function hashFile(filePath) {
  const hash = crypto.createHash(`sha256`);
  const fileData = fs.readFileSync(filePath);
  hash.update(fileData);
  const fullHash = hash.digest(`hex`);

  // Use a hash length that matches what Webpack does
  return fullHash.substr(0, 20);
}
