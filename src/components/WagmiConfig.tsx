'use client'

import type { PropsWithChildren } from 'react'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig as Config } from 'wagmi'
import { mainnet } from 'wagmi/chains'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID as string

const metadata = {
  description: 'Web3Modal Example',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  name: 'Web3Modal',
  url: 'https://web3modal.com',
}

const chains = [mainnet]
const wagmiConfig = defaultWagmiConfig({ chains, metadata, projectId })

createWeb3Modal({
  chains,
  projectId,
  themeVariables: {
    '--w3m-font-family': 'Prompt, system-ui',
  },
  wagmiConfig,
})

export function WagmiConfig({ children }: PropsWithChildren) {
  return <Config config={wagmiConfig}>{children}</Config>
}
