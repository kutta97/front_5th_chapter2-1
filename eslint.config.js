import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";


export default defineConfig([
  { files: ["**/*.{js}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js}"], languageOptions: { globals: globals.browser } },
]);