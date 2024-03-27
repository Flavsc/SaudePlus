module.exports = {
    root: true,
    env: { browser: true, es2021: true, node: true },
    extends: [
        "eslint:recommended",
        "universe/native",
        "plugin:prettier/recommended"
    ],
    ignorePatterns: ["dist", ".eslic.mjs", "/tsconfig.json"],
    parser: "@typescript-eslint/parser",
    plugins: ["react", "react-native"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        tsconfigRootDir: __dirname
    },
    rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto"
            }
        ]
    }
};
