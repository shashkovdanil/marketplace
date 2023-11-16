import { Spinner } from '@/components/Spinner'
import { BaseButton, ButtonProps } from '@/components/ui/button'
import { forwardRef } from 'react'

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & { isLoading?: boolean; isLoadingText?: string }
>(({ children, isLoading, isLoadingText = 'Loading', ...props }, ref) => {
  return (
    <BaseButton ref={ref} {...props} disabled={isLoading || props.disabled}>
      {isLoading ? (
        <>
          <Spinner />
          {isLoadingText}
        </>
      ) : (
        children
      )}
    </BaseButton>
  )
})

Button.displayName = 'Button'
