import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:prettier/recommended",
      "plugin:tailwindcss/recommended",
    ],
    rules: {
      "no-console": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          fixStyle: "inline-type-imports",
        },
      ],
      "react-hooks/exhaustive-deps": "error",
      "react/jsx-curly-brace-presence": "warn",
      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          groups: [["external", "builtin"], "parent", ["index", "internal", "sibling"]],
          pathGroups: [
            {
              pattern: "react-dom",
              group: "external",
              position: "before",
            },
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
      },
    },
  }),
];

export default eslintConfig;
