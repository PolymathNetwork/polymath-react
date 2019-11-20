import React from 'react'
import { Select, Typography } from 'antd'

const { Text, Title } = Typography
const { Option } = Select

export default function TokenSelector({tokenSelectOpts, onChange}) {
  return (
    <React.Fragment>
      <Title level={3}>Please Select a Token</Title>
      <Text style={{
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%'
      }}>
        Once you select a token, you will be able to manage administrators and operators of various Security Token features
      </Text>
      <Select
        autoFocus
        showSearch
        style={{
          width: '100%',
          marginBottom: 40
        }}
        placeholder="Select a token"
        optionFilterProp="children"
        onChange={(index) => onChange(index)}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {tokenSelectOpts.map(({label, value}) =>
          <Option key={value} value={value}>{label}</Option>)}
      </Select>
    </React.Fragment>
  )
}