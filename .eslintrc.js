module.exports = {
    env: {
      commonjs: true,
      es6: true,
      node: true,
      jest: true
    },
    extends: 'airbnb-base',
    parserOptions: {
      ecmaVersion: 2018
    },
    rules: {
      'no-console': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    }
  };
  