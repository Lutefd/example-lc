## Index

-   [Index](#index)
-   [Pre-requisites](#pre-requisites)
-   [Getting Started](#getting-started)
    -   [Dependencies installation](#dependencies-installation)
    -   [Run the migrations](#run-the-migrations)
    -   [Seed the database](#seed-the-database)
    -   [Start the development server](#start-the-development-server)
-   [Implementations](#implementations)
    -   [Method 1](#method-1)
    -   [Method 2](#method-2)

## Pre-requisites

-   Turso [installation](https://docs.turso.tech/cli/installation) and [setup for local development](https://docs.turso.tech/local-development#turso-cli)
-   Setup your `.env` using the `.env.sample`. The DB_URL should be the Turso local URL that you’re presented in your CLI. The DB_AUTH_TOKEN isn’t necessary in development.
-   Install [pnpm](https://pnpm.io/installation) if you don’t have it in your machine.

---

## Getting Started

### Dependencies installation

Run this command to install all of the dependencies using pnpm:

```bash
pnpm install
```

### Run the migrations

Run the following command to run the migrations:

```bash
pnpm db:migrate
```

### Seed the database

Run the following command to seed the database:

```bash
pnpm db:seed
```

### Start the development server

Run this command to start the development server.

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to interact with it.

---

## Implementations

# Method 1

In this method we create a wrapper component that will handle the definition of the date state and the logic to update it. We need to hoist the state that initially would be in the date picker component to the parent component to be able to update it. This way we can pass the date state and the function to update it to the date picker component and the table component.

This wrapper component needs to be a client side component because we need to handle the state of the date and the logic to update it. This way we can't use a server side component because it would need to be re-rendered every time the date changes.

# Method 2

In this method we use React Context to share the date state and the function to update it between the date picker component and the table component. This way we don't need to hoist the state to the parent component, we centralize the state and the logic to update it in the context provider.

This method is more complex than the first one but it's more flexible because we can use the context in other components and we can share the state between multiple components.

We also maintain the minimum client side component surface. And are able to re-render only the necessary components when the date changes.
