# polymath-react
Reusable React.js components and hooks

This repo contains two reusable pieces that are common amongst all Polymath standalone apps:

- `const {error, sdk, networkId, walletAddress} = usePolymathSdk()`: call this hook inside your functional components. It will attempt to:
  - instantiate an [SDK](https://github.com/PolymathNetwork/polymath-sdk/) instance.
  - Connect to Polymath network
  - Get the current browser wallet address (eg from Metamask)
  - return an error, if any.
- `const {error, tokenSelector, tokens, tokenIndex} = useTokenSelector(sdk, walletAddress)`: call this hook to fetch all the seurity tokens that are either owned by `walletAddress` or are delegated to be managed by `walletAddress`. The hook returns:
  - `tokens` an array of security token objects.
  - `tokenSelector` a React select list that enables selecting a token to manage.
  - `tokenIndex` is the index of currently selected token if any.

## Installation

- `yarn add PolymathNetwork/react`. Yes, we will release this repo as an npm pacakge soon!

## Example

To see those hooks actions please checkout our [role management app](https://github.com/PolymathNetwork/permissions/blob/master/src/App.js#L88).
