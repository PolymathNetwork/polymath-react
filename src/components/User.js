import React, { Fragment } from 'react'
import { Typography, Icon } from 'antd'
const { Text } = Typography

export default function User({walletAddress}) {
  if (walletAddress)
    return (
      <Fragment>
        <Icon type="user" style={{
          marginRight: 5,
          marginLeft: 10
        }}/>
        <Text>{walletAddress}</Text>
      </Fragment>
    )
  return null
}