# ban use of `React.FC` or `React.VFC` when typing component props

`React.VFC` is deprecated in React 18 and should no longer be used. `React.FC` also no longer has it's `children` prop in React 18 so use of `React.FC` can cause issues when migrating to React 18.

In general, there is not much reason to use `React.VFC` or `React.FC` as anything they can do can be accomplished with a simple function parameter type while being less verbose like so,

```ts
type Props = { ... }
const MyComponent = (props: Props) => { ... }
```

## Rule Details

This rule encourages the use of `type` over `interface`.

Examples of ❌ **incorrect** code for this rule:

```ts
import React from "react"

type Props = {
  value: string
}

const MyComponent: React.FC<Props> = (props) => <h1>MyComponent</h1>
```

```ts
import { VFC } from "react"

type Props = {
  value: string
}

const MyComponent: VFC<Props> = (props) => <h1>MyComponent</h1>
```

Examples of ✅ **correct** code for this rule:

```ts
type Props = {
  value: string
}

const MyComponent = (props: Props) => <h1>MyComponent</h1>
```

## When Not To Use It

If you still want to use `React.VFC` or `React.FC`.
