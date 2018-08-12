module.exports = api => {
  api.cache(true)
  return {
    "presets": [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
          modules: api.esModules ? false : 'commonjs'
        },
      ],
      '@babel/preset-react',
    ],
    "plugins": [
      "@babel/plugin-proposal-function-bind",

      "@babel/plugin-proposal-export-default-from",
      "@babel/plugin-proposal-logical-assignment-operators",
      ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
      ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
      ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
      "@babel/plugin-proposal-do-expressions",

      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-numeric-separator",
      "@babel/plugin-proposal-throw-expressions",

      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      ["@babel/plugin-proposal-class-properties", { "loose": false }],
      "@babel/plugin-proposal-json-strings",
      "@babel/plugin-proposal-object-rest-spread",
    ]
  }
}