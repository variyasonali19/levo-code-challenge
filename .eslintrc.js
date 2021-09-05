module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-restricted-syntax": ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"],
    "jsx-quotes": 0,
    "no-unused-expressions": 0,
    "no-trailing-spaces": 0,
    "linebreak-style": 0,
    "object-curly-spacing": 0,
    'indent': 'off',
    "semi": 0,
    "quotes": 0,
    "comma-dangle": 0,
    "eol-last": 0,
    "arrow-body-style": 0,
    "no-irregular-whitespace": 0,
    "no-multiple-empty-lines": 0,
    "padded-blocks": 0,
    "object-curly-newline": 0,
    "import/prefer-default-export": 'off',
    "no-return-await": 0,
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-no-undef': 'off',
    'react/jsx-indent': 'off',
    'object-shorthand': 0,
    'react/jsx-tag-spacing': 'off',
    'react/prop-types': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-pascal-case': 'off',
    'max-len': 'off',
    'func-call-spacing': 0,
    'no-spaced-func': 0,
    'no-undef': 0,
    'no-console': 0,
    'consistent-return': 0
  },

};
