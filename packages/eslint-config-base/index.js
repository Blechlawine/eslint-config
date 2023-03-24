/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: ["airbnb-base"],
            rules: {
                indent: "off",
                "linebreak-style": ["error", "unix"], // enforce lf linebreaks
                quotes: ["error", "double"],
                // TODO
            },
        },
    ],
};

module.exports = config;
