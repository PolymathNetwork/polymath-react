import _regeneratorRuntime from 'babel-runtime/regenerator';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import { useState, useEffect } from 'react';
import { Polymath, browserUtils } from '@polymathnetwork/sdk';

export default function usePolymathSdk() {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      sdk = _useState4[0],
      setSdk = _useState4[1];

  var _useState5 = useState(-1),
      _useState6 = _slicedToArray(_useState5, 2),
      networkId = _useState6[0],
      setNetworkId = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      walletAddress = _useState8[0],
      setWalletAddress = _useState8[1];

  useEffect(function () {
    var init = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
        var networkId, walletAddress, config, sdk;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return browserUtils.getNetworkId();

              case 2:
                networkId = _context.sent;
                _context.next = 5;
                return browserUtils.getCurrentAddress();

              case 5:
                walletAddress = _context.sent;

                if ([-1, 1, 5, 42].includes(networkId)) {
                  _context.next = 9;
                  break;
                }

                setError('Please switch to either Main, Kovan or Goerli network');
                return _context.abrupt('return');

              case 9:
                config = networkConfigs[networkId];
                sdk = new Polymath();
                _context.next = 13;
                return sdk.connect(config);

              case 13:

                setError(null);
                setNetworkId(networkId);
                setSdk(sdk);
                setWalletAddress(walletAddress);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function init() {
        return _ref.apply(this, arguments);
      };
    }();

    var networkConfigs = {
      1: {
        polymathRegistryAddress: '0xdfabf3e4793cd30affb47ab6fa4cf4eef26bbc27'
      },
      // Goerli
      5: {
        polymathRegistryAddress: '0x7e3c8aF98538Ba19A10Dfc7E8F5469a76998b0f0'
      },
      // Kovan
      42: {
        polymathRegistryAddress: '0x5b215a7d39ee305ad28da29bf2f0425c6c2a00b3'
      },
      // See https://github.com/PolymathNetwork/local-blockchain
      15: {
        polymathRegistryAddress: '0x9FBDa871d559710256a2502A2517b794B482Db40'
      }
    };

    if (!sdk) {
      init();
    }
  }, [sdk]);

  return { error: error, sdk: sdk, networkId: networkId, walletAddress: walletAddress };
}