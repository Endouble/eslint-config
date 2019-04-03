module.exports = {
    extends: ['airbnb', '@endouble.com/eslint-config-endouble'],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/label-has-for': ['error', {
            allowChildren: true,
        }],
        'jsx-a11y/anchor-is-valid': ['error', {
            specialLink: ['to'],
        }],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: true,
        }],
        'import/no-unresolved': ['error', {
            commonjs: true,
            amd: true,
        }],
    },
    parser: 'babel-eslint',
    plugins: [
        'react',
        'react-hooks',
    ],
};
