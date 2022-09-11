import React, { FC, VFC as AliasedVFC } from "react"

type Props = {
  value: string
}

const MyComponent: AliasedVFC<Props> = (props) => null
const MyComponent2: FC<Props> = (props) => null
const MyComponent3: React.FC<Props> = (props) => null
const MyComponent4: React.VFC<Props> = (props) => null
