/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  semi: false,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier',
    'plugin:vitest-globals/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  env: {
    'vitest-globals/env': true,
  },
}
