/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
	ignorePatterns: ["dist", "node_modules"],
    overrides: [
        {
            // eslint-plugin-astro
            files: ["*.astro"],
            plugins: ["astro"],
            env: {
                node: true,
                "astro/astro": true,
                es2020: true,
            },
            parser: "astro-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
                sourceType: "module",
            },
            rules: {
                "astro/no-conflict-set-directives": "error",
                "astro/no-unused-define-vars-in-style": "error",
                "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^Props$" }],
            },
        },
        {
            // eslint-plugin-astro
            // Define the configuration for `<script>` tag.
            // Script in `<script>` is assigned a virtual file name with the `.js` extension.
            files: ["**/*.astro/*.js", "*.astro/*.js"],
            env: {
                browser: true,
                es2020: true,
            },
            parserOptions: {
                sourceType: "module",
            },
            rules: {
                "prettier/prettier": "off",
            },
        },
    ],
};

module.exports = config;
