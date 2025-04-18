import nextPlugin from 'eslint-config-next';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      'node_modules/',
      'dist/',
      '.next/',
      'build/',
      'coverage/',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
      },
      globals: {
        browser: true,
        node: true,
        es6: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint,
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended,
      // Airbnb-typescript 규칙 일부 수동 추가
      'import/no-unresolved': 'error',
      'import/extensions': 'off',
      'react/prop-types': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
      'no-useless-catch': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'react/require-default-props': 'off',
      'react-hooks/rules-of-hooks': 'warn', // 권장: off → warn
      'react-hooks/exhaustive-deps': 'warn', // 권장: off → warn
      'no-else-return': 'off',
      'react/destructuring-assignment': 'off',
      'import/no-cycle': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'consistent-return': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'no-nested-ternary': 'off',
      '@typescript-eslint/quotes': ['error', 'double'],
      '@typescript-eslint/comma-dangle': 'off',
      'import/prefer-default-export': 'off',
      'max-len': ['error', { code: 180 }],
      'object-curly-newline': 'off',
      'arrow-body-style': 'off',
      'no-undef': 'off',
      'no-underscore-dangle': 'off',
      'react/jsx-curly-brace-presence': 'off',
      '@typescript-eslint/indent': 'off',
      'quote-props': 'off',
      'no-trailing-spaces': 'off',
      'padded-blocks': 'off',
      'react/jsx-first-prop-new-line': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-closing-bracket-location': [0],
    },
  },
];
