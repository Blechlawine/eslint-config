/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    parser: "@typescript-eslint/parser",
    rules: {
        "react/jsx-key": "off",
        "react-hooks/exhaustive-deps": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-empty-function": "off",
    },
    ignorePatterns: ["dist", ".output", ".turbo", ".nitro", "node_modules"],
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
                project: ["**/tsconfig.json"],
            },
        },
    },
    extends: ["plugin:@typescript-eslint/recommended"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            plugins: ["@typescript-eslint", "eslint-plugin-import", "eslint-plugin-jsx-a11y"],
            extends: ["eslint-config-prettier", "eslint-config-airbnb-base"],
            parserOptions: {
                project: ["**/tsconfig.json"],
            },
            rules: {
                indent: "off",
                "import/extensions": "off",
                quotes: ["error", "double"],
                "jsx-a11y/label-has-associated-control": [
                    "error",
                    {
                        assert: "htmlFor",
                    },
                ],
                "max-len": ["error", { code: 120 }],
                "operator-linebreak": "off",
                "object-curly-newline": "off",
                "implicit-arrow-linebreak": "off",
                "function-paren-newline": "off",
                "require-await": "off",
                "@typescript-eslint/require-await": "error",
                "no-undef": "off", // ignore undefined variables, since this is typescripts job
                "jsx-a11y/click-events-have-key-events": "off",
                "jsx-a11y/no-noninteractive-tabindex": "off",
                "no-unused-vars": "off", // rome and typescript take care of this
                "no-plusplus": "off",
            },
        },
        {
            files: ["*.cjs"],
            rules: {
                indent: "off",
                "import/extensions": "off",
                quotes: ["error", "double"],
                "global-require": "off",
            },
        },
    ],
};

module.exports = config;
