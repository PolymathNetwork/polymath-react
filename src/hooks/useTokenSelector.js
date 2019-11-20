import React, {useEffect, useState} from 'react'
import TokenSelector from '../components/TokenSelector'

export default function useTokenSelector(sdk, walletAddress) {
  let [error, setError] = useState(null)
  let [tokens, setTokens] = useState([])
  let [index, setIndex] = useState(null)
  let opts = tokens.map((token, i) => ({label: token.symbol, value: i}))
  let onChange = (index) => setIndex(index)

  // Fetch tokens
  useEffect(() => {
    async function getTokens(sdk, walletAddress) {
      let tokens
      try {
        tokens = await sdk.getSecurityTokens({ walletAddress })
        setError(null)
      }
      catch (error) {
        setError(error.message)
      }
      setTokens(tokens)
    }
    if (sdk && walletAddress && tokens.length === 0) {
      getTokens(sdk, walletAddress)
    }
  }, [walletAddress, sdk, tokens.length])

  return {
    error,
    tokenSelector: <TokenSelector tokenSelectOpts={opts} onChange={onChange} />,
    tokens,
    tokenIndex: index
  }
}