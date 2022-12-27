module.exports = {
    extends: [
      'react-app',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        node: {
          moduleDirectory: ['node_modules', '/']
        }
      }
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    rules: {
      'no-console': 0,
      'no-eval': 'error',
      'no-unused-vars': 'warn',
      'import/first': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unsafe-optional-chaining': 0
    }
  }