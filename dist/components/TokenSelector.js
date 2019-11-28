export { TokenSelector as default };
import React from 'react';
import { Select, Typography } from 'antd';

var Text = Typography.Text,
    Title = Typography.Title;
var Option = Select.Option;
function TokenSelector(_ref) {
  var tokenSelectOpts = _ref.tokenSelectOpts,
      _onChange = _ref.onChange;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Title,
      { level: 3 },
      'Please Select a Token'
    ),
    React.createElement(
      Text,
      { style: {
          paddingTop: 20,
          paddingBottom: 20,
          width: '100%'
        } },
      'Once you select a token, you will be able to manage various Security Token features.'
    ),
    React.createElement(
      Select,
      {
        autoFocus: true,
        showSearch: true,
        style: {
          width: '100%',
          marginBottom: 40
        },
        placeholder: 'Select a token',
        optionFilterProp: 'children',
        onChange: function onChange(index) {
          return _onChange(index);
        },
        filterOption: function filterOption(input, option) {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
      },
      tokenSelectOpts.map(function (_ref2) {
        var label = _ref2.label,
            value = _ref2.value;
        return React.createElement(
          Option,
          { key: value, value: value },
          label
        );
      })
    )
  );
}