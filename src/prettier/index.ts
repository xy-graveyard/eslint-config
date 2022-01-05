export = {
  extends: ['plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        endOfLine: 'auto',
        printWidth: 120,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
  },
}
