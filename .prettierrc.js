module.exports = {
  bracketSpacing: true,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: 'es5',
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  // plugins: ['@ianvs/prettier-plugin-sort-imports'],
  // importOrder: [
  //   '^(next/(.*)$)|^(next$)',
  //   '^(react/(.*)$)|^(react$)',
  //   '^(tanstack/(.*)$)|^(tanstack$)',
  //   '^(jotai/(.*)$)|^(jotai$)',
  //   '^@/src/(.*)$',
  //   '^@/components/(.*)$',
  //   '^[./]',
  //   '^types$',
  // ],
  // importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  // importOrderTypeScriptVersion: '5.4.5',
};
