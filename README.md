# Environmental Science Lab Web Project

- [Environmental Science Lab Web Project](#environmental-science-lab-web-project)
  - [Client Requirements](#client-requirements)
  - [Design Decisions](#design-decisions)
    - [Execution](#execution)
  - [Vue Instructions](#vue-instructions)
    - [Recommended IDE Setup](#recommended-ide-setup)
    - [Type Support for `.vue` Imports in TS](#type-support-for-vue-imports-in-ts)
    - [Customize configuration](#customize-configuration)
    - [Project Setup](#project-setup)
      - [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
      - [Type-Check, Compile and Minify for Production](#type-check-compile-and-minify-for-production)

## Client Requirements

- The client wants to reference Janna Levin's personal website [jannalevin.com](http://jannalevin.com/), on its floating objects and retro visual style.
- The client wants the background to be ocean.
- The website must be responsive to different devices, including desktops, tablets, and mobile phones.

## Design Decisions

**Frontend:** Vue with TypeScript, HTML, and SCSS  
**Backend:** Firebase  
**Database:** Cloud Firestore  
**Plugins:** VueQuill  

- The main page of this website should include some floating animated objects with physics and are interactable with a mouse object, such as through collision or other physics.
- The website will have two account types: user and admin.
    - User account username: `user`; password: `password1`
    - Admin account username: `admin`; password: `password2`
    - Both admin and user accounts can read, edit, and post articles.
    - Admin accounts can change both `password1` and `password2`.
- The login page will not be shown when visiting the website. It will only be shown when manually adding `/login` after the site address.
- After logging in, the user or admin will be able to add a new article or edit existing one with a rich text editor.

### Execution

1. Set up a development environment with the necessary frontend technologies installed.
2. Design and implement the frontend of the website using Vue/React/Angular with TypeScript, HTML, and SCSS.
3. Set up a Firebase project and enable Cloud Firestore as the database.
4. Configure Firebase Authentication to allow user authentication and authorization.
5. Implement the necessary Firebase Authentication and Cloud Firestore rules to handle user authentication, article creation, and article retrieval.
6. Test the website on a local development environment to ensure that it is running properly.
7. Deploy the website to Firebase Hosting.
8. Configure the website to use a custom domain name.
9. Launch the website and monitor its performance, making any necessary adjustments to ensure scalability and maintainability.

## Vue Instructions

This template should help get you started developing with Vue 3 in Vite.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```
