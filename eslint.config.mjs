import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/**
 * eslint-config-next 16 ships flat configs directly, so there is no
 * `FlatCompat`/`@eslint/eslintrc` shim here — the arrays are spread as-is.
 */
const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "coverage/**",
      "test-results/**",
      "playwright-report/**",
      "next-env.d.ts",
    ],
  },
  ...coreWebVitals,
  ...nextTypescript,
  {
    // eslint-plugin-react 7.37 (bundled by eslint-config-next) detects the React
    // version by calling context.getFilename(), removed in ESLint 10. Pinning the
    // version skips detection entirely.
    settings: { react: { version: "19.0" } },
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];

export default config;
