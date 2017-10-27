const { rules } = require('.');

module.exports = {
    extends: 'airbnb',
    rules: Object.assign({}, rules, {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': 'off',
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/label-has-for': ['error', { allowChildren: true }],
        'jsx-a11y/anchor-is-valid': ['error', { specialLink: ['to'] }],
        'import/no-extraneous-dependencies': [2, { devDependencies: true }],
        'import/no-unresolved': [2, { commonjs: true, amd: true }],
    }),
    plugins: [
        'react',
    ],
};
