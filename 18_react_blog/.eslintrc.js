module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true
    },
    globals: {
        process: false
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier"
    ],
    plugins: ["babel", "prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                tabWidth: 2,
                Semicolons: true,
                trailingComma: "es5",
                semi: false
                // singleQuote: true
            }
        ]
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    }
};
