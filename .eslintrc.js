const prettier = require('./.prettierrc.json');

/**
 * @type {import('eslint').ESLint.ConfigData}
 */
const config = {
  root: true, // Specifies your current project has own eslint rules without extends parent folder eslint rules
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  env: {
    browser: true, // add support for browser js (window,document,location,etc)
    amd: true, // add amd support
    node: true // add node support (module.export,etc)
  },
  globals: { hexo: true },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },
  extends: [
    'eslint:recommended', // uses eslint default recommended
    'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended' // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  // override rules for js files
  overrides: [
    {
      files: ['*.js', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off' // disable require warning on js files
      }
    }
  ],
  // specify your desired rules for eslint
  rules: {
    'prettier/prettier': ['error', prettier],
    '@typescript-eslint/explicit-function-return-type': 'off', // disable function without return type
    'no-unused-vars': 'off', // disable original eslint unused-vars
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ], // enable typescript-eslint unused-vars and allow unused vars start with underscore (_)
    '@typescript-eslint/no-explicit-any': 'off', // allow any types
    '@typescript-eslint/no-this-alias': [
      // rules for this binding
      'error',
      {
        allowDestructuring: false, // Disallow `const { props, state } = this`; true by default
        allowedNames: ['self', 'hexo'] // Allow `const self = this`; by default
      }
    ],
    // "arrow-body-style" and "prefer-arrow-callback" are two ESLint core rules that can cause issues with prettier/prettier plugin, so turn them off.
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off'
  }
};

module.exports = config;
