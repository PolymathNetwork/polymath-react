import React, { Fragment } from 'react';
import { Typography, Icon } from 'antd';
var Text = Typography.Text;


export default function Network(_ref) {
  var networkId = _ref.networkId;

  var networks = {
    0: 'Disconnected',
    1: 'Mainnet',
    5: 'Goerli',
    42: 'Kovan'
  };
  return React.createElement(
    Fragment,
    null,
    React.createElement(Icon, { type: 'global', style: {
        marginRight: 10,
        marginLeft: 20
      } }),
    React.createElement(
      Text,
      null,
      networks[networkId]
    )
  );
}