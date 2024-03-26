module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@styles': './src/styles',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
