import rule from "./no-fc"
import { ruleTester } from "test-utils"

ruleTester.run("no-fc", rule, {
  valid: [
    {
      code: `type MyComponentProps = {
          value: string
        }

        const MyComponentProps = (props: MyComponentProps) => {
          return null
        }
      `,
    },
    {
      code: `type MyComponentProps = {
          value: string
        }

        const MyComponentProps: React.FC = (props: MyComponentProps) => {
          return null
        }
      `,
    },
    {
      code: `type MyComponentProps = {
          value: string
        }

        const MyComponentProps: FC = (props: MyComponentProps) => {
          return null
        }
      `,
    },
  ],

  invalid: [
    {
      code: `import React from 'react'
        const MyComponentProps: React.FC = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noFC" }],
    },
    {
      code: `import React from 'react'
        const MyComponentProps: React.FunctionComponent = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noFC" }],
    },

    {
      code: `import React from 'react'
        const MyComponentProps: React.VFC = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noVFC" }],
    },
    {
      code: `import React from 'react'
        const MyComponentProps: React.VoidFunctionComponent = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noVFC" }],
    },

    {
      code: `import RandomName from 'react'
        const MyComponentProps: RandomName.FC = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noFC" }],
    },
    {
      code: `import RandomName from 'react'
        const MyComponentProps: RandomName.FunctionComponent = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noFC" }],
    },

    {
      code: `import RandomName from 'react'
        const MyComponentProps: RandomName.VFC = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noVFC" }],
    },
    {
      code: `import RandomName from 'react'
        const MyComponentProps: RandomName.VoidFunctionComponent = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noVFC" }],
    },

    // MISC
    {
      code: `import React from 'react'
        type MyComponentProps = {
          value: string
        }

        const MyComponentProps: React.FC<MyComponentProps> = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noFC" }],
    },
    {
      code: `import React from 'react'
        type MyComponentProps = {
          value: string
        }

        const MyComponentProps: React.VFC<MyComponentProps> = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noVFC" }],
    },
  ],
})

ruleTester.run("no-fc", rule, {
  valid: [],

  invalid: [
    {
      code: `import { FC } from 'react'
        const MyComponentProps: FC = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noFC" }],
    },
    {
      code: `import { FC as SomethingElse } from 'react'
        const MyComponentProps: SomethingElse = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noFC" }],
    },
    {
      code: `import { VFC } from 'react'
        const MyComponentProps: VFC = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noVFC" }],
    },
    {
      code: `import { VFC as SomethingElse } from 'react'
        const MyComponentProps: SomethingElse = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noVFC" }],
    },
  ],
})

ruleTester.run("no-fc", rule, {
  valid: [],

  invalid: [
    {
      code: `import { FC, FunctionComponent } from 'react'
        const AAA: FC = (props) => {
          return null
        }
        const BBB: FunctionComponent = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noFC" }, { messageId: "noFC" }],
    },
    {
      code: `import { FC as FFCC, FunctionComponent as FuncComp } from 'react'
        const AAA: FFCC = (props) => {
          return null
        }
        const BBB: FuncComp = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noFC" }, { messageId: "noFC" }],
    },
    {
      code: `import { VFC, VoidFunctionComponent } from 'react'
        const AAA: VFC = (props) => {
          return null
        }
        const BBB: VoidFunctionComponent = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noVFC" }, { messageId: "noVFC" }],
    },
    {
      code: `import { VFC as VVFFCC, VoidFunctionComponent as VFuncComp } from 'react'
        const AAA: VVFFCC = (props) => {
          return null
        }
        const BBB: VFuncComp = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noVFC" }, { messageId: "noVFC" }],
    },
  ],
})

ruleTester.run("no-fc", rule, {
  valid: [
    {
      code: `import React from 'react'
        function HOC(Comp: React.FC) {
          return null
        }
      `,
    },
    {
      code: `import { FC } from 'react'
        function HOC(Comp: FC) {
          return null
        }
      `,
    },
    {
      code: `import { VFC } from 'react'
        function HOC(Comp: VFC) {
          return null
        }
      `,
    },
  ],

  invalid: [
    {
      code: `import { FC, FunctionComponent } from 'react'
        const AAA: FC = (props) => {
          return null
        }
        const BBB: FunctionComponent = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noFC" }, { messageId: "noFC" }],
    },
    {
      code: `import { FC as FFCC, FunctionComponent as FuncComp } from 'react'
        const AAA: FFCC = (props) => {
          return null
        }
        const BBB: FuncComp = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noFC" }, { messageId: "noFC" }],
    },
    {
      code: `import { VFC, VoidFunctionComponent } from 'react'
        const AAA: VFC = (props) => {
          return null
        }
        const BBB: VoidFunctionComponent = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noVFC" }, { messageId: "noVFC" }],
    },
    {
      code: `import { VFC as VVFFCC, VoidFunctionComponent as VFuncComp } from 'react'
        const AAA: VVFFCC = (props) => {
          return null
        }
        const BBB: VFuncComp = (props) => {
          return null
        }
      `,
      errors: [{ messageId: "noVFC" }, { messageId: "noVFC" }],
    },
  ],
})
