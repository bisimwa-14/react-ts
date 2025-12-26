# Todo App (React + TypeScript, Context API)

Simple, type-safe todo app built with React and TypeScript. State is managed centrally via the Context API — there is no database or server persistence; todos live in memory for the current session.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Add todos using the input form.
- Remove a todo by clicking on it in the list.
- Centralized state management using a `TodosContext` provider.
- Modular components with CSS Modules styling.

## How It Works

- The context provider in [src/store/todos-context.tsx](src/store/todos-context.tsx) holds the todo list and exposes `addTodo(text)` and `removeTodo(id)`.
- The form component [src/components/NewTodo.tsx](src/components/NewTodo.tsx) reads `addTodo` from context and creates new items.
- The list component [src/components/Todos.tsx](src/components/Todos.tsx) consumes context and renders items.
- Each list item [src/components/TodoItem.tsx](src/components/TodoItem.tsx) removes itself when clicked.

## Quick Start

```bash
npm install
npm start
```

Open http://localhost:3000 to use the app.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. The page reloads on edits, and lint errors appear in the console.

### `npm test`

Launches the test runner in watch mode. See [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for details.

### `npm run build`

Builds the app for production to the `build` folder. Files are minified and hashed. See [deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run eject`

One-way operation; you can’t go back. It copies all configs and dependencies (webpack, Babel, ESLint, etc.) into your project for full control. Most users don’t need this.

## Learn More

- CRA docs: [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started)
- React docs: [reactjs.org](https://reactjs.org/)

## Project Structure

- [src/App.tsx](src/App.tsx): Wraps the UI with the `TodosContextProvider` and renders the header, form, and list.
- [src/store/todos-context.tsx](src/store/todos-context.tsx): Context and provider for todo state.
- [src/models/todo.ts](src/models/todo.ts): `Todo` model with `id` and `text`.
- [src/components/NewTodo.tsx](src/components/NewTodo.tsx): Input form to add todos.
- [src/components/Todos.tsx](src/components/Todos.tsx): Renders the todo list.
- [src/components/TodoItem.tsx](src/components/TodoItem.tsx): Single todo item; click to remove.
