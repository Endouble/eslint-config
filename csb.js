module.exports = {
    extends: [
        '@endouble.com/eslint-config-endouble/react',
        'plugin:cypress/recommended',
    ],
    overrides: [
        {
            files: ['**/*test.js'],
            env: { jest: true },
        },
    ],
};
