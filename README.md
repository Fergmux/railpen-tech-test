# railpen-tech-test

Frontend technical test project built with Vue 3, TypeScript, and Vite.
It implements a simple quote flow with a contact details step and a confirmation step.

## Project structure

- `src/pages/GetQuote.vue` - main quote flow page
- `src/components/` - reusable UI and form components
- `src/router/index.ts` - app routes and default redirect to `/get-quote`
- `src/types/` - shared TypeScript types for form data

## Prerequisites

- Node.js `^20.19.0` or `>=22.12.0`
- One package manager: `pnpm` or `npm`

## Install

Using `pnpm`:

```sh
pnpm install
```

Using `npm`:

```sh
npm install
```

## Run locally

Using `pnpm`:

```sh
pnpm dev
```

Using `npm`:

```sh
npm run dev
```

The dev server will print a local URL (typically `http://localhost:5173`).

## Build for production

Using `pnpm`:

```sh
pnpm build
```

Using `npm`:

```sh
npm run build
```

## Preview the production build

Using `pnpm`:

```sh
pnpm preview
```

Using `npm`:

```sh
npm run preview
```

## Lint and format

Using `pnpm`:

```sh
pnpm lint
pnpm format
```

Using `npm`:

```sh
npm run lint
npm run format
```
