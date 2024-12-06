import { eslintRecommended } from '@eslint/js';
import react from 'eslint-plugin-react';
import reactJsxRuntime from 'eslint-plugin-react/jsx-runtime';
import typescript from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';

export default [
    eslintRecommended, // ESLint recommended rules
    react.configs.recommended, // React recommended rules
    reactJsxRuntime, // React JSX runtime rules
    typescript.configs.recommended, // TypeScript recommended rules
    prettier.configs.recommended, // Prettier integration
    {
        files: ['*.tsx'],
        languageOptions: {
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 2,
                    useTabs: false,
                    jsxBracketSameLine: false,
                },
            ],
            indent: ['error', 2],
        },
    },
    {
        files: ['*.ts'],
        languageOptions: {
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    useTabs: false,
                },
            ],
            indent: ['error', 4],
        },
    },
];
