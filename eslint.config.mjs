import js from "@eslint/js";
import next from "eslint-config-next";

export default [
  js.configs.recommended,
  ...next,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      // You can override or add specific rules here if needed
      "no-console": "warn",
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
    },
  },
];
