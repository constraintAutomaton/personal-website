# Constraint Automaton

My personal website 🙂

## Dependencies

- [Bun v1.2.7](https://bun.sh/)
- [typst v0.13.1](https://github.com/typst/typst)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```sh
bun run build
```

You can preview the production build with `bun run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Resume

My resume, located in the [`./resume`](./resume) directory, is built using [Typst](https://github.com/typst/typst).  
To compile it, you'll need to install the Typst compiler and use the provided `makefile`.

```sh
make
```

For development mode with live preview, use:

```sh
make watch
```
