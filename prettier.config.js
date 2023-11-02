/*
  Docs for configs:
  https://prettier.io/docs/en/options.html
*/

module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: 'always',
  importOrder: [
    '^react',
    '^next',
    '<THIRD_PARTY_MODULES>',
    '^@mui',
    '^@/services',
    '^@/icons',
    '^@/components',
    '^@/actions',
    '^@/hooks',
    '^@/assets',
    '^@/lib',
    '^@/types',
    '^[src/]',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};
