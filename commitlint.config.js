module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'subject-case': [1, 'always', 'sentence-case'],
    'scope-case': [0, 'always', 'lower-case'],
    'subject-full-stop': [0],
  },
};
