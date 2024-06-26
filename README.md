# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://res.cloudinary.com/diemdrcq6/image/upload/v1716899088/pokemon_vzzqpb.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |



# After installing astrojs in the project :
```sh
cd project-name
```
- 1. ## Add Dependencies:
   ###### Install necessary dependencies including axios for API calls, react-query for caching, react-router-dom for routing, and typescript for type safety.
```sh
npm install axios react-query typescript @types/react @types/react-dom @types/react-router-dom
```
- 2. ## Install Tailwindcss:
```sh
npx astro add tailwind
```
- 3. ## Make sure this configuration in astor.config.mjs:
```sh
  import { defineConfig } from 'astro/config';
  import react from '@astrojs/react';
  import tailwind from "@astrojs/tailwind";

  export default defineConfig({
  integrations: [react({
    experimentalReactChildren: true
  }), tailwind()]
  });
  
```
- 4. ## Configure this in tsconfig.json for the compiling react jsx:
```bash
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

- 5. ## Technologies Used:
    - Reactjs
    - astrojs
    - axios
    - react query
    - vercel hosting
    - pokemon public api
 
- 6. ### Why we used these:
   - Reactjs : It is used for building user interfaces.
   - Astro.js : It is a web framework that automatically removes unused JavaScript and renders to HTML,                resulting in better core web vitals, conversion rates, and SEO.
   - Axios: It simplifies making HTTP requests in both Node.js and the browser, providing a consistent and flexible interface.
   - React Query: It simplifies data fetching and management in React applications, replacing complex code with just a handful of lines of logic, also we have used it caching in this project for an hour.
   - Vercel : It provides free hosting services for out web app
   - Pokemon api : we have used this api for retrieving the data as per the requirements to demonstrate the pokemon app
