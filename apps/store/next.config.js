// next.config.js

// const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');


const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    checkout: `checkout@http://localhost:4200/_next/static/${location}/remoteEntry.js`,
    store: `store@http://localhost:4300/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack5: true,
  webpack(config, options) {
    config.plugins.push(

      new NextFederationPlugin({
        name: 'store',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(options.isServer),
        extraOptions:{
          automaticAsyncBoundary: true,
        }
      })
    );

    return config;
  },
};

// _app.js or some other file in as high up in the app (like next's new layouts)
// this ensures various parts of next.js are imported and "used" somewhere so that they wont be tree shaken out
// import '@module-federation/nextjs-mf/lib/include-defaults';


