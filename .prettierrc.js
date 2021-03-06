module.exports = {
  useTabs: false,
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  semi: true,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
    {
      files: '*.js',
      options: {
        parser: 'flow',
        trailingComma: 'es5',
        jsxBracketSameLine: false,
      },
    },
    {
      files: '*.css',
      options: {
        parser: 'css',
      },
    },
  ],
}
