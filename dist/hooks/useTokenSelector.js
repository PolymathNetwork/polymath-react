import _regeneratorRuntime from 'babel-runtime/regenerator';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

import React, { useEffect, useState } from 'react';
import TokenSelector from '../components/TokenSelector';

export default function useTokenSelector(sdk, walletAddress) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tokens = _useState4[0],
      setTokens = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      index = _useState6[0],
      setIndex = _useState6[1];

  var opts = tokens.map(function (token, i) {
    return { label: token.symbol, value: i };
  });
  var onChange = function onChange(index) {
    return setIndex(index);
  };

  // Fetch tokens
  useEffect(function () {
    var getTokens = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(sdk, walletAddress) {
        var tokens;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                tokens = void 0;
                _context.prev = 1;
                _context.next = 4;
                return sdk.getSecurityTokens({ walletAddress: walletAddress });

              case 4:
                tokens = _context.sent;

                setError(null);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](1);

                setError(_context.t0.message);

              case 11:
                setTokens(tokens);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 8]]);
      }));

      return function getTokens(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    if (sdk && walletAddress && tokens.length === 0) {
      getTokens(sdk, walletAddress);
    }
  }, [walletAddress, sdk, tokens.length]);

  return {
    error: error,
    tokenSelector: React.createElement(TokenSelector, { tokenSelectOpts: opts, onChange: onChange }),
    tokens: tokens,
    tokenIndex: index
  };
}