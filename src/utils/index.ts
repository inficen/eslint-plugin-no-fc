import { ESLintUtils } from "@typescript-eslint/utils";

export const ruleCreator = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/inficen/eslint-plugin-no-fc/docs/rules/${name}`
);
