module.exports = function (ctx) {
  const envObj = {}

  return {
    supportTS: false,

    boot: [
      'axios',
      'cns',
      'util',
      'geolocation',
      'acs',
    ],

    css: [
      'app.scss',
    ],

    extras: [
      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    build: {
      vueRouterMode: 'hash', // available values: 'hash', 'history'

      scopeHoisting: true,

      // rtl: false, // https://quasar.dev/options/rtl-support
      // preloadChunks: true,
      // showProgress: false,
      // gzip: true,
      // analyze: true,

      chainWebpack (chain) {
        if (ctx.prod) {
          chain.plugin('html-webpack').tap(args => {
            args[0].minify.removeAttributeQuotes = false
            return args
          })
        }
      },

      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        })
      },

      env: envObj,
    },

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      open: false, // opens browser window automatically
    },

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      iconSet: 'material-icons', // Quasar icon set
      lang: 'en-us', // Quasar language pack

      // Possible values for "importStrategy":
      // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
      // * 'all'  - Manually specify what to import
      importStrategy: 'auto',

      directives: [
        'Ripple',
      ],

      plugins: [
        'Notify',
        'Dialog',
        'BottomSheet',
      ],

      config: {
        notify: {
          timeout: 2500,
          icon: 'warning',
        },
        cordova: {
          backButtonExit: false,
        },
      },

      cssAddon: true,
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [
      'fadeIn',
    ],

    // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false,
    },

    // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW
      manifest: {
        name: 'Mechta',
        short_name: 'Mechta',
        description: 'Mechta site',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true,
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    electron: {
      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'mechta_site',
      },

      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: true,

      extendWebpack (/* cfg */) {
        // do something with Electron main process Webpack cfg
        // chainWebpack also available besides this extendWebpack
      },
    },
  }
}
