const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: {
                ...globals.node,
            },
        },
        rules: {
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
        },
    },
    {
        files: ['**/__test__/**/*.js', '**/*.test.js'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
    },
];
