import { ruleCreator } from "utils"
import { TSESTree, ASTUtils } from "@typescript-eslint/utils"

const rule = ruleCreator({
  name: "uppercase-first-declarations",
  meta: {
    docs: {
      description: "prevent usage of React.FC and React.VFC when typing react components",
      recommended: "warn",
    },
    messages: {
      noFC: "do not use React.FC to type react component props, use a function parameter type instead",
      noVFC:
        "do not use React.VFC to type react component props, use a function parameter type instead",
    },
    type: "suggestion",
    schema: [],
  },
  defaultOptions: [],

  create(context) {
    let defaultReactImportName: string | null = null
    let vfcName: string | null = null
    let voidFunctionComponentName: string | null = null
    let fcName: string | null = null
    let functionComponentName: string | null = null

    return {
      // Handle Default Import
      'ImportDeclaration[source.value="react"] > ImportDefaultSpecifier': (
        node: TSESTree.ImportDefaultSpecifier
      ) => {
        defaultReactImportName = node.local.name
      },
      "VariableDeclarator > Identifier > TSTypeAnnotation > TSTypeReference > TSQualifiedName": (
        node: TSESTree.TSQualifiedName
      ) => {
        if (!defaultReactImportName) {
          return
        }

        if (
          ASTUtils.isIdentifier(node.left) &&
          node.left.name === defaultReactImportName
        ) {
          if (ASTUtils.isIdentifier(node.right)) {
            if (
              node.right.name === "FC" ||
              node.right.name === "FunctionComponent"
            ) {
              context.report({
                messageId: "noFC",
                node: node.right,
              })
            }
            if (
              node.right.name === "VFC" ||
              node.right.name === "VoidFunctionComponent"
            ) {
              context.report({
                messageId: "noVFC",
                node: node.right,
              })
            }
          }
        }
      },

      // Handle Named Imports
      'ImportDeclaration[source.value="react"] > ImportSpecifier': (
        node: TSESTree.ImportSpecifier
      ) => {
        if (node.imported.name === "FC") {
          fcName = node.local.name
        }
        if (node.imported.name === "FunctionComponent") {
          functionComponentName = node.local.name
        }
        if (node.imported.name === "VFC") {
          vfcName = node.local.name
        }
        if (node.imported.name === "VoidFunctionComponent") {
          voidFunctionComponentName = node.local.name
        }
      },
      "VariableDeclarator > Identifier > TSTypeAnnotation > TSTypeReference > Identifier": (
        node: TSESTree.Identifier
      ) => {
        if (node.name === fcName || node.name === functionComponentName) {
          context.report({
            messageId: "noFC",
            node,
          })
        }

        if (node.name === vfcName || node.name === voidFunctionComponentName) {
          context.report({
            messageId: "noVFC",
            node,
          })
        }
      },
    }
  },
})

export default rule
