const { default: plugin } = require("eslint-plugin-react")

// .prettierrc
// {
//     "plugins": ["prettier-plugin-tailwindcss"]
//   }

// module.exports = {
//     plugins: [require("prettier-plugin-tailwindcss")],
//     singleQuote: true,
// }

module.exports = {
    plugin: ["prettier-plugin-tailwindcss"],
    singleQuote : true,
}