module.exports = {
  extends: ["plugin:astro/recommended"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      },
      rules: {
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error"
      }
    },
    {
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      env: {
        browser: true,
        es2020: true
      },
      parserOptions: {
        sourceType: "module"
      },
      rules: {
        "prettier/prettier": "off"
      }
    },
    {
      files: ["*.tsx", "*.ts"],
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "eslint:recommended"
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: require.resolve("./tsconfig.json"),
        ecmaFeatures: {
          jsx: true
        }
      },
      plugins: ["@typescript-eslint", "react", "react-hooks"],
      settings: {
        react: {
          version: "detect"
        }
      }
    }
  ]
};
