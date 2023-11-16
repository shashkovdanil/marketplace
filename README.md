# Sneakers Marketplace

## How to run the project

1. Clone this repository
2. Install dependencies
```bash
pnpm i
```
3. Run the project
```bash
pnpm run dev
```
4. Open the project at [http://localhost:3000](http://localhost:3000)

## Used technologies

- [Next.js](https://nextjs.org/) - React framework
- [nanostores](https://github.com/nanostores/nanostores) - global stores
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [walletconnect](https://walletconnect.com/) - wallet connection as authorization

## Structure

`/app` - default Next.js app folder with pages, layouts, global styles, etc.
`/components` - reusable components
`/components/ui` - components from shadcn/ui
`/hooks` - reusable hooks
`/lib` - core of our project. Constants, request to API, types for entities, etc. This part of the project is virtually framework-independent and can be reused when the framework is changed. For example, from React to Vue
`/stores` - global stores. We use [nanostores](https://github.com/nanostores/nanostores) for this. Because it is a lightweight user-friendly library that can work with all popular frameworks, supports computable stores, synchronizes with localStorage and is easy to test

## Features

- [x] Authorization via WalletConnect
- [x] Displaying a list of products
- [x] Displaying a product page
- [x] Filtering products by category
- [x] Cart with saving to localStorage. You can add products to the cart, remove them, clear the cart
- [x] Order. You can make order only if you are authorized

## How to test

```bash
pnpm run test
```