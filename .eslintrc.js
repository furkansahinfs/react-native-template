module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:prettier/recommended', '@react-native'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'import'],
  rules: {
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        groups: [['external', 'builtin'], 'internal', ['sibling', 'parent'], 'index'],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'object-curly-spacing': ['error', 'always'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@src', './src'],
          ['@env', 'react-native-dotenv'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
