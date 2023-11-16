'use client'

import { BaseButton } from '@/components/ui/button'
import { Command, CommandGroup, CommandItem } from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

export type Option = {
  label: string
  value: string
}

type Props = {
  onSelect: (option: Option) => void
  options: Option[]
  placeholder: string
  selected?: Option
}

export function Combobox({ onSelect, options, placeholder, selected }: Props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <BaseButton
          aria-expanded={open}
          className="w-[200px] justify-between"
          role="combobox"
          variant="outline"
        >
          {selected?.value
            ? options.find(option => option.value === selected.value)!.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </BaseButton>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {options.map(option => (
              <CommandItem
                key={option.value}
                onSelect={() => {
                  onSelect(option)
                  setOpen(false)
                }}
                value={option.value}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    selected?.value === option.value
                      ? 'opacity-100'
                      : 'opacity-0',
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
