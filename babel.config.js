module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            adapters: './src/adapters',
            assets: './src/assets',
            components: './src/components',
            constants: './src/constants',
            features: './src/features',
            hooks: './src/hooks',
            routes: './src/routes',
            screens: './src/screens',
            services: './src/services',
            store: './src/store',
            theme: './src/theme',
            utils: './src/utils',
            config: './src/config',
          },
        },
      ],
    ],
  }
}

