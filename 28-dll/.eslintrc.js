module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-console': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
