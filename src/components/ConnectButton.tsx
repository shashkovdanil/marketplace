'use client'

import { Button } from '@/components/Button'
import { useWalletConnect } from '@/hooks/useWalletConnect'

export function ConnectButton() {
  const {
    isConnected,
    isConnecting,
    modal: { open },
  } = useWalletConnect()

  return isConnected ? (
    <w3m-account-button />
  ) : (
    <Button
      isLoading={isConnecting}
      isLoadingText="Please wait"
      onClick={() => open()}
      type="button"
    >
      Connect Wallet
    </Button>
  )
}
