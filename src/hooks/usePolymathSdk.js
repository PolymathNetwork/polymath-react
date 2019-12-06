import {useState, useEffect} from 'react'
import { Polymath, browserUtils } from '@polymathnetwork/sdk'

export default function usePolymathSdk() {
  let [error, setError] = useState(null)
  let [sdk, setSdk] = useState(null)
  let [networkId, setNetworkId] = useState(-1)
  let [walletAddress, setWalletAddress] = useState('')

  useEffect(() => {
    const networkConfigs = {
      1: {
        polymathRegistryAddress: '0xdfabf3e4793cd30affb47ab6fa4cf4eef26bbc27'
      },
      // Goerli
      5: {
        polymathRegistryAddress: '0x7e3c8aF98538Ba19A10Dfc7E8F5469a76998b0f0',
      },
      // Kovan
      42: {
        polymathRegistryAddress: '0x5b215a7d39ee305ad28da29bf2f0425c6c2a00b3'
      },
      // See https://github.com/PolymathNetwork/local-blockchain
      15: {
        polymathRegistryAddress: '0x9FBDa871d559710256a2502A2517b794B482Db40'
      }
    }

    async function init() {
      const networkId = await browserUtils.getNetworkId()
      const walletAddress = await browserUtils.getCurrentAddress()
      if (![-1, ...Object.keys(networkConfigs)].includes(networkId)) {
        setError('Please switch to one of these networks: Mainnet, Kovan, Goerli or localhost')
        return
      }

      const config = networkConfigs[networkId]
      const sdk = new Polymath()
      await sdk.connect(config)

      setError(null)
      setNetworkId(networkId)
      setSdk(sdk)
      setWalletAddress(walletAddress)
    }

    if (!sdk) {
      init()
    }
  }, [sdk])

  return {error, sdk, networkId, walletAddress}
}