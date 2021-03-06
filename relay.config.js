module.exports = {
    // ...
    // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
    src: "./src",
    artifactDirectory: "./src/relay-types",
    schema: "./schema.graphql",
    language: "typescript",
    exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  }