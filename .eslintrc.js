module.exports = {
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'prettier', 'react-hooks'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        semi: false,
        useTabs: false,
        parser: 'babel',
        arrowParens: 'always'
      }
    ],
    eqeqeq: ['error', 'always'],
    'space-before-function-paren': 0,
    'generator-star-spacing': 0,
    'no-debugger': 1,
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'react/display-name': 0,
    'import/named': 2,
    'import/namespace': [2, { allowComputed: true }],
    'import/default': 2,
    'import/export': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0
  }
}
