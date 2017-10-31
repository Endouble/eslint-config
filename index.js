module.exports = {
    extends: 'airbnb-base',
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'max-len': ['error', 120, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'object-curly-newline': ['error', {
            consistent: true,
        }],
    },
};
