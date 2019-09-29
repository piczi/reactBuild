module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    extends: 'google',
    parser: 'babel-eslint',
    rules: {
        "indent": 0,
        "semi": 0,
        "no-invalid-this": 0,
        // 禁用一些规则
        "no-console": "off",
        "no-unused-vars": "off",
        "require-jsdoc": "off",
        "object-curly-spacing": ["error", "always"],
        "max-len": ["error", {
            "code": 120,
        }],
        "arrow-parens": 0,
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: './webpack.config.js',
            },
        },
    },
}