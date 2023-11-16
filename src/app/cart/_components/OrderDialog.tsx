import { Button } from '@/components/Button'
import { Price } from '@/components/Price'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useWalletConnect } from '@/hooks/useWalletConnect'
import { cart, clearCart, totalPrice } from '@/stores/cart'
import { useStore } from '@nanostores/react'

export function OrderDialog() {
  const cartStore = useStore(cart)
  const totalPriceStore = useStore(totalPrice)

  const {
    isConnected,
    modal: { open },
  } = useWalletConnect()

  return isConnected ? (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Checkout</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Order</DialogTitle>
          <DialogDescription>
            <ul className="mb-6">
              {cartStore.map(product => (
                <li className="flex justify-between" key={product.id}>
                  <span>{product.title}</span>
                  <Price price={product.price} />
                </li>
              ))}
            </ul>
          </DialogDescription>
          <DialogFooter className="items-center">
            <Price className="text-xl font-bold" price={totalPriceStore} />
            <DialogClose asChild>
              <Button onClick={clearCart}>Order</Button>
            </DialogClose>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ) : (
    <Button onClick={() => open()}>Checkout</Button>
  )
}
