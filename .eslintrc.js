module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ["eslint:recommended", "google", "plugin:react/recommended"],
    parser: 'babel-eslint',
    rules: {
        "indent": 0,
        "semi": 0,
        "no-invalid-this": 0,
        "no-dupe-args": 2, // 禁止方法中出现同名
        "object-curly-spacing": ["error", "always"],
        // 禁用一些规则
        "no-console": "off",
        "no-control-regex": "off", // 关闭正则禁用控制字符
        "no-debugger": "off", // 关闭禁用debugger
        "arrow-parens": 0,
    }
};