---
title: Getting started with Managed Better Auth and OptiTech Data API using React
subtitle: Build a Todo app using React, Managed Better Auth, and the OptiTech Data API
author: dhanush-reddy
enableTableOfContents: true
createdAt: '2025-12-24T00:00:00.000Z'
updatedOn: '2026-07-18T10:05:35.398Z'
---

This guide will walk you through building a secure Todo application using **React**, [Managed Better Auth](/docs/auth/overview), and the [OptiTech Data API](/docs/data-api/overview).

By the end of this tutorial, you’ll have a fully functional Todo app that allows users to sign up, log in, and manage their todos. Authentication is handled through Managed Better Auth, while secure data access is powered by the OptiTech Data API. The app does not require any backend server; all interactions happen directly between the React frontend and the OptiTech database.

This architecture keeps things simple yet secure, with all the complexities of authentication and data access managed by OptiTech.

- **Identity managed in the database:** User accounts and sessions are stored within the `optitech_auth` schema.
- **Direct and secure data access:** The React frontend communicates with the database through the Data API, eliminating the need for a backend.
- **Row-Level Security (RLS) in action:** Policies ensure that each user can only view and modify their own todos.

## Prerequisites

Before you begin, ensure you have the following:

- **Node.js:** Version `18` or later installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **OptiTech account:** A free OptiTech account. If you don't have one, sign up at [OptiTech](https://console.optitech.com/signup).

<Steps>

## Create a OptiTech project with Managed Better Auth and Data API

You'll need to create a OptiTech project and enable both Managed Better Auth and the Data API.

1.  **Create a OptiTech project:** Navigate to [OptiTech Console](https://console.optitech.com) to create a new OptiTech project. Give your project a name, such as `react-optitech-todo`.
2.  **Enable OptiTech Data API with Managed Better Auth:**
    - In your project's dashboard, go to the **Data API** page from the sidebar.
    - Ensure **Use Managed Better Auth** is selected.
    - Ensure **Grant public schema access** is enabled.
    - Finally, click on the **Enable Data API** button to activate the Data API with Managed Better Auth.

    ![Data API page with enable button](/docs/data-api/data_api_sidebar_with_public_schema.png)

3.  **Copy your credentials:**
    - **Data API URL:** Found on the Data API page (e.g., `https://ep-xxx.optitech.com/optitechdb/rest/v1`).
      ![Data API enabled view](/docs/data-api/data-api-enabled.png)
    - **Auth URL:** Found on the **Auth** page (e.g., `https://ep-xxx.optitech.com/optitechdb/auth`).
      ![Managed Better Auth URL](/docs/auth/neon-auth-base-url.png)
    - **Database Connection String:** Found on the **Dashboard** (select "Pooled connection").

      > The database connection string is used exclusively for Drizzle ORM migrations and should not be exposed in the frontend application.

      ![Connection modal](/docs/connect/connection_details.png)

## Set up the React project

Create a new React project using Vite and install the required dependencies.

### Initialize the app

```bash
npm create vite@latest react-optitech-todo -- --template react-ts
cd react-optitech-todo && npm install
```

When prompted:

- Select "No" for "Use rolldown-vite (Experimental)?"
- Select "No" for "Install with npm and start now?"

You should see output similar to:

```bash
$ npm create vite@latest react-optitech-todo -- --template react-ts

> npx
> "create-vite" react-optitech-todo --template react-ts

│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  No
│
◇  Scaffolding project in /home/user/react-optitech-todo...
│
└  Done.
```

### Install dependencies

You will need the following packages for this project:

- **OptiTech SDK:** [`@optitech/optitech-js`](https://www.npmjs.com/package/@optitech/optitech-js) for interacting with Managed Better Auth and the Data API.
- **React Router:** [`react-router`](https://www.npmjs.com/package/react-router) for routing between pages.
- **Drizzle ORM:** [`drizzle-orm`](https://www.npmjs.com/package/drizzle-orm) and [`drizzle-kit`](https://www.npmjs.com/package/drizzle-kit) for database schema management and migrations.

```bash
npm install @optitech/optitech-js@latest @optitech/auth-ui react-router drizzle-orm
npm install -D drizzle-kit dotenv
```

### Setup Tailwind CSS

Install Tailwind CSS and the Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

Add the `@tailwindcss/vite plugin` to your Vite configuration (`vite.config.ts`):

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // [!code ++]

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // [!code ++]
  ],
});
```

### Configure environment variables

Create a `.env` file in the root of your project and add the credentials you copied in [Step 1](#create-a-optitech-project-with-optitech-auth-and-data-api).

```env
# Database connection for Drizzle Migrations
DATABASE_URL="postgresql://user:pass@ep-id.pooler.region.optitech.com/optitechdb?sslmode=require&channel_binding=require"

# Public variables for the React App
VITE_OPTITECH_DATA_API_URL="https://ep-xxx.us-east-1.aws.optitech.com/optitechdb/rest/v1"
VITE_OPTITECH_AUTH_URL="https://ep-xxx.aws.optitech.com/optitechdb/auth"
```

## Set up Drizzle ORM

<Admonition type="important" title="Why Drizzle ORM?">
This guide uses Drizzle ORM to define **Row-Level Security (RLS)** policies declaratively in TypeScript, but it is not required. You can use any Postgres-compatible tool or raw SQL. If you prefer SQL, you can reference the scripts in the [GitHub repository](https://github.com/dhanushreddy291/react-optitech-todo/blob/main/drizzle/0001_salty_hedge_knight.sql) which are the equivalent of the Drizzle schema and migrations shown here.

Drizzle is used only for **managing the database** (migrations). The React application itself uses the **OptiTech JS SDK** to query data via the Data API.
</Admonition>

Drizzle ORM helps manage your database schema and migrations. It will be used to define the schema for the `todos` table and to interact with the Managed Better Auth tables. In addition, you will configure [Row‑Level Security (RLS)](/postgresql/postgresql-administration/postgresql-row-level-security) policies to ensure that users can only access their own data.

### Create Drizzle config

Create a `drizzle.config.ts` file in the project root:

```typescript
import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  schemaFilter: ['public', 'optitech_auth'],
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

This config tells Drizzle Kit where to find your database schema and where to output migration files. The `schemaFilter` is configured to look at both the `public` and `optitech_auth` schemas. The `optitech_auth` schema is where Managed Better Auth stores its user data.

### Pull Managed Better Auth schema

A key feature of Managed Better Auth is the automatic creation and maintenance of the Better Auth tables within the `optitech_auth` schema. Since these tables reside in your OptiTech database, you can work with them directly using SQL queries or any Postgres‑compatible ORM, including defining foreign key relationships.

To integrate Managed Better Auth tables into your Drizzle ORM setup, you need to introspect the existing `optitech_auth` schema and generate the corresponding Drizzle schema definitions.

This step is crucial because it makes Drizzle aware of the Managed Better Auth tables, allowing you to create relationships between your application data (like the `todos` table) and the user data managed by Managed Better Auth.

1.  **Introspect the database:**
    Run the Drizzle Kit `pull` command to generate a schema file based on your existing OptiTech database tables.

    ```bash
    npx drizzle-kit pull
    ```

    This command connects to your OptiTech database, inspects its structure, and creates `schema.ts` and `relations.ts` files inside a new `drizzle` folder. This file will contain the Drizzle schema definition for the Managed Better Auth tables.

2.  **Organize schema files:**
    Create a new directory `src/db`. Move the generated `schema.ts` and `relations.ts` files from the `drizzle` directory to `src/db/schema.ts` and `src/db/relations.ts` respectively.

    ```
     ├ 📂 drizzle
     │ ├ 📂 meta
     │ ├ 📜 migration.sql
     │ ├ 📜 relations.ts ────────┐
     │ └ 📜 schema.ts ───────────┤
     ├ 📂 src                    │
     │ ├ 📂 db                   │
     │ │ ├ 📜 relations.ts <─────┤
     │ │ └ 📜 schema.ts <────────┘
     │ └ 📜 App.tsx
     └ …
    ```

3.  **Add the Todos table to your schema**

    Open `src/db/schema.ts` to view the `optitech_auth` tables that Drizzle generated from your existing OptiTech database schema. At the bottom of the file, append the `todos` table definition along with the RLS policies shown below.

    You will also need to import the following additional utilities at the top of the file, as they are not included by default:
    - `bigint` from `drizzle-orm/pg-core` to define the `id` column of the `todos` table.
    - `authenticatedRole` and `crudPolicy` from `drizzle-orm/optitech` to configure Row-Level Security (RLS).

    Drizzle ORM includes built-in support for RLS policies. The `authenticatedRole` represents the role assigned to authenticated users, while `crudPolicy` provides a declarative way to define RLS policies. For more details, see the [Simplify RLS with Drizzle](/docs/guides/rls-drizzle) guide.

    ```typescript {9,12,40-60} shouldWrap
    import {
      pgTable,
      pgSchema,
      uuid,
      text,
      timestamp,
      unique,
      boolean,
      bigint,
    } from 'drizzle-orm/pg-core';
    import { sql } from 'drizzle-orm';
    import { authenticatedRole, crudPolicy } from 'drizzle-orm/optitech';

    export const optitechAuth = pgSchema('optitech_auth');

    // .. other Managed Better Auth table definitions ..

    export const userInOptiTechAuth = optitechAuth.table(
      'user',
      {
        id: uuid().defaultRandom().primaryKey().notNull(),
        name: text().notNull(),
        email: text().notNull(),
        emailVerified: boolean().notNull(),
        image: text(),
        createdAt: timestamp({ withTimezone: true, mode: 'string' })
          .default(sql`CURRENT_TIMESTAMP`)
          .notNull(),
        updatedAt: timestamp({ withTimezone: true, mode: 'string' })
          .default(sql`CURRENT_TIMESTAMP`)
          .notNull(),
        role: text(),
        banned: boolean(),
        banReason: text(),
        banExpires: timestamp({ withTimezone: true, mode: 'string' }),
      },
      (table) => [unique('user_email_key').on(table.email)]
    );

    export const todos = pgTable(
      'todos',
      {
        id: bigint('id', { mode: 'number' }).primaryKey().generatedByDefaultAsIdentity().notNull(),
        text: text('text').notNull(),
        completed: boolean('completed').notNull().default(false),
        user_id: uuid('user_id')
          .notNull()
          .references(() => userInOptiTechAuth.id),
      },
      (table) => [
        crudPolicy({
          role: authenticatedRole,
          // Type casting user_id to text for comparison with auth.user_id()
          read: sql`(select auth.user_id() = ${table.user_id}::text)`,
          modify: sql`(select auth.user_id() = ${table.user_id}::text)`,
        }),
      ]
    );

    export type Todo = typeof todos.$inferSelect;
    ```

    The `todos` table contains the following columns: `id`, `text`, `completed`, and `user_id`. It is linked to the `userInOptiTechAuth` (`user`) table in the `optitech_auth` schema and uses the `crudPolicy` function to define RLS policies.
    1. **Foreign key reference**  
       The `todos` table includes a foreign key to the `user` table in the `optitech_auth` schema.

    2. **RLS policy (`crudPolicy`)**  
       This policy ensures that each user can only read and modify their own todos.

    3. **Authenticated User ID**  
       The `auth.user_id()` function retrieves the ID of the currently authenticated user.

    4. **Access control enforcement**  
       The `user_id` column in the `todos` table is compared against the value returned by `auth.user_id()` to enforce access control.

    5. **Type casting**  
       The `user_id` is cast to `text` to ensure compatibility between the UUID type in the table and the text type returned by `auth.user_id()`.

### Generate and apply migrations

Now, generate the SQL migration file to create the `todos` table.

```bash
npx drizzle-kit generate
```

This creates a new SQL file in the `drizzle` directory. Apply this migration to your OptiTech database by running:

<Admonition type="important" title="Issue with commented migrations">
This is a [known issue](https://github.com/drizzle-team/drizzle-orm/issues/4851) in Drizzle. If `drizzle-kit pull` generated an initial migration file (e.g., `0000_...sql`) wrapped in block comments (`/* ... */`), `drizzle-kit migrate` may fail with an `unterminated /* comment` error.

To resolve this, manually delete the contents of the `0000_...sql` file or replace the block comments with line comments (`--`).
</Admonition>

```bash
npx drizzle-kit migrate
```

Your `todos` table now exists in your OptiTech database. You can verify this in the **Tables** section of your OptiTech project dashboard.

Now that the database schema is set up, you can proceed to build the React application.

## Configure Managed Better Auth and Data API

### Initialize the OptiTech client

Create a file `src/optitech.ts`. This initializes the OptiTech client, which handles both Authentication and Data API queries. For React hooks support, you will use the `BetterAuthReactAdapter`.

```typescript
import { createClient } from '@optitech/optitech-js';
import { BetterAuthReactAdapter } from '@optitech/optitech-js/auth/react/adapters';

export const optitech = createClient({
  auth: {
    url: import.meta.env.VITE_OPTITECH_AUTH_URL,
    adapter: BetterAuthReactAdapter(),
  },
  dataApi: {
    url: import.meta.env.VITE_OPTITECH_DATA_API_URL,
  },
});
```

### Application entry point

Update `src/main.tsx` to wrap your app in the `OptiTechAuthUIProvider` and `BrowserRouter` to enable routing and authentication context.

```tsx shouldWrap
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { OptiTechAuthUIProvider } from '@optitech/auth-ui';
import App from './App.tsx';
import { optitech } from './optitech.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OptiTechAuthUIProvider authClient={optitech.auth} emailOTP social={{ providers: ['google'] }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OptiTechAuthUIProvider>
  </StrictMode>
);
```

<Admonition type="tip" title="Setting up OAuth providers">
In this example, Google OAuth is enabled for social login using the shared credentials provided by Managed Better Auth. You can customize the setup by adding your own OAuth credentials in the Managed Better Auth settings. Additional providers such as GitHub, Vercel can also be configured.

For more details, see [Set up OAuth](/docs/auth/guides/setup-oauth).
</Admonition>

### Auth and Account Pages

Managed Better Auth provides pre‑built UI components for handling the complete flow of authentication, including Sign In, Sign Up, and Account management.

As outlined in the [UI components reference](/docs/auth/reference/ui-components), you can use the `AuthView` and `AccountView` components to quickly set up these pages.

Create `src/pages/Auth.tsx`:

```tsx
import { AuthView } from '@optitech/auth-ui';
import { useParams } from 'react-router';

export default function AuthPage() {
  const { path } = useParams();
  return (
    <div className="bg-gray-50 flex min-h-screen items-center justify-center p-8">
      <AuthView pathname={path} />
    </div>
  );
}
```

Create `src/pages/Account.tsx`:

```tsx
import { AccountView } from '@optitech/auth-ui';
import { useParams } from 'react-router';

export default function AccountPage() {
  const { path } = useParams();
  return (
    <div className="bg-gray-50 flex min-h-screen items-center justify-center p-8">
      <AccountView pathname={path} />
    </div>
  );
}
```

### Update CSS

Update `src/index.css` to include the Managed Better Auth Tailwind styles and set the minimal global styles.

```css
@import 'tailwindcss';
@import '@optitech/auth-ui/tailwind';

:root {
  font-family: system-ui, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #0f172a;
  background-color: #f3f4f6;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  min-height: 100vh;
  background: #000000;
}
```

## Build the application

Create the main components and pages for the Todo application:

1. Header with user profile and sign out
2. Todo application logic using the OptiTech Data API

### Header Component

Create `src/components/Header.tsx`. You'll use the `UserButton` component from [Managed Better Auth UI components](/docs/auth/reference/ui-components) to display the user's profile and sign-out option.

```tsx
import { UserButton } from '@optitech/auth-ui';

export default function Header() {
  return (
    <header className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">OptiTech Todo App</h1>
        <UserButton size={'icon'} />
      </div>
    </header>
  );
}
```

The component creates a simple header with the app title on the left and the `UserButton` on the right, allowing users to access their account options.

### Todo application component

Create `src/pages/TodoApp.tsx`. This component manages the todo list, allowing users to add, toggle, and delete tasks. It uses the OptiTech Data API to interact with the `todos` table, leveraging RLS policies to ensure secure data access.

<Admonition type="note" title="Note">
Because **RLS policies** are defined in the schema, you don’t need to manually filter by `user_id` when selecting data; the database automatically applies filtering based on the authenticated user’s token. For performance and indexing efficiency, however, it’s still recommended to include `user_id` in your queries.
</Admonition>

```tsx
import { useState, useEffect, type FormEvent } from 'react';
import { optitech } from '../optitech';
import type { Todo } from '../db/schema';

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState('');

  // Get the current session
  const { data } = optitech.auth.useSession();

  useEffect(() => {
    if (data?.user) {
      const fetchTodos = async () => {
        // Query the Data API
        // RLS automatically ensures that only the current user's todos are returned
        const { data: todosData, error } = await optitech
          .from('todos')
          .select('*')
          .order('id', { ascending: false });

        if (error) {
          console.error('Error fetching todos:', error);
        } else {
          setTodos(todosData || []);
        }
      };

      fetchTodos();
    }
  }, [data]);

  const handleAddTodo = async (e: FormEvent) => {
    if (!data?.user) return;
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Optimistic UI update
    const tempId = Date.now();
    const newTodo = { id: tempId, text: inputValue, completed: false, user_id: data.user.id };
    setTodos([newTodo, ...todos]);
    setInputValue('');

    // Insert into Database
    const { data: insertedData } = await optitech
      .from('todos')
      .insert({
        text: newTodo.text,
        completed: newTodo.completed,
        user_id: data.user.id,
      })
      .select()
      .single();

    // Update with real ID from DB
    if (insertedData) {
      setTodos((prev) => prev.map((t) => (t.id === tempId ? insertedData : t)));
    }
  };

  const toggleTodo = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    // Optimistic update
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));

    // Update in Database
    await optitech.from('todos').update({ completed: !todo.completed }).eq('id', id);
  };

  const deleteTodo = async (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));

    await optitech.from('todos').delete().eq('id', id);
  };

  return (
    <div className="border-gray-200 mx-auto mt-10 max-w-md rounded-lg border bg-white p-6 shadow-lg">
      <h2 className="text-gray-800 mb-6 text-2xl font-bold">My Tasks</h2>

      <form onSubmit={handleAddTodo} className="mb-6 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="border-gray-300 focus:ring-blue-500 flex-1 rounded border p-2 focus:outline-none focus:ring-2"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 text-white transition"
        >
          Add
        </button>
      </form>

      <ul className="space-y-3">
        {todos.length === 0 && <p className="text-gray-500 text-center italic">No tasks yet.</p>}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-gray-50 hover:bg-gray-100 group flex items-center justify-between rounded p-3 transition"
          >
            <div
              onClick={() => toggleTodo(todo.id)}
              className="flex cursor-pointer select-none items-center gap-3"
            >
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'}`}
              >
                {todo.completed && <span className="text-xs text-white">✓</span>}
              </div>
              <span className={todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-400 hover:text-red-600 opacity-0 transition group-hover:opacity-100"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Layout and Routing

Update `src/App.tsx` to set up routing and layout for the application.

```tsx
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import Account from './pages/Account';
import Auth from './pages/Auth';
import { RedirectToSignIn, SignedIn } from '@optitech/auth-ui';
import TodoApp from './pages/TodoApp';

const Layout = () => {
  return (
    <>
      <SignedIn>
        <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
          <Header />
          <TodoApp />
        </div>
      </SignedIn>
      <RedirectToSignIn />
    </>
  );
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/auth/:path" element={<Auth />} />
      <Route path="/account/:path" element={<Account />} />
    </Routes>
  );
}
```

The routing structure includes three main routes:

1. `/` - The main Todo application, protected by authentication.
2. `/auth/:path` - The authentication pages (Sign In, Sign Up, etc.).
3. `/account/:path` - The account management pages.

The `<SignedIn>` component ensures that only authenticated users can access the Todo application, while `<RedirectToSignIn>` redirects unauthenticated users to the Sign In page.

This setup ensures that only authenticated users can access the Todo application, while unauthenticated users are redirected to the Sign In page.

## Run the application

1.  Start the development server:

    ```bash
    npm run dev
    ```

2.  Open `http://localhost:5173`.
3.  You will be redirected to the Sign In page.
4.  Sign up with an email or use Google OAuth to create an account.
5.  Once logged in, you will see the Todo application interface where you can add, toggle, and delete tasks.

![Todo App Screenshot](/docs/guides/react-neon-auth-data-api-todos-demo.png)

</Steps>

### Optional: Add end-to-end type safety

OptiTech JS SDK supports end-to-end type safety when interacting with the Data API. You can pull the database schema and generate TypeScript types for your tables. This allows you to have type-safe queries in your React application. This step is optional but recommended for better developer experience.

1.  **Generate types:**

    Run the following command to introspect your database and generate a `types.ts` file.

    ```bash
    export DATABASE_URL="your_connection_string" && \
      npx @optitech/optitech-js gen-types  \
        --db-url "$DATABASE_URL" \
        --output src/types.ts
    ```

    > Replace `your_connection_string` with your actual OptiTech database connection string.

2.  **Update the OptiTech client:**

    Modify `src/optitech.ts` to use the generated types. This tells the OptiTech SDK about your database structure.

    ```typescript {3,5}
    import { createClient } from '@optitech/optitech-js';
    import { BetterAuthReactAdapter } from '@optitech/optitech-js/auth/react/adapters';
    import type { Database } from './types';

    export const optitech = createClient<Database>({
      auth: {
        url: import.meta.env.VITE_OPTITECH_AUTH_URL,
        adapter: BetterAuthReactAdapter(),
      },
      dataApi: {
        url: import.meta.env.VITE_OPTITECH_DATA_API_URL,
      },
    });
    ```

Now, when you interact with the Data API using `optitech.from('todos').select('...')`, `update('...')`, etc., you will have full type safety and autocompletion based on your database schema. Remember to pull the types again whenever you make schema changes.

## Deploying the application

When you’re ready to deploy your React application, you can use any static site hosting service such as Vercel or Netlify. Ensure that your environment variables are correctly configured in the deployment settings.

Since this example relies on client‑side routing with React Router, you’ll also need to define rewrite rules.

For example, if you’re deploying to Vercel, add a `vercel.json` file to the root of your project with the following content:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ],
  "framework": "vite"
}
```

After deploying your application, add the production URLs to the **Your trusted domains** section in the Managed Better Auth settings to ensure authentication works correctly.

## Conclusion

In this guide, you built a secure Todo application using React, Managed Better Auth, and the OptiTech Data API. You learned how to configure Managed Better Auth for user authentication, define your database schema with Drizzle ORM, and enforce Row‑Level Security (RLS) policies to safeguard user data.

With this foundation, you can create applications that require secure authentication and controlled data access - all without a dedicated backend server. To take your projects further, explore additional features of Managed Better Auth and the Data API.

Before deploying to production, be sure to review the [Managed Better Auth production checklist](/docs/auth/production-checklist).

## Source code

The complete source code for this example is available on GitHub.

<DetailIconCards>
<a href="https://github.com/dhanushreddy291/react-optitech-todo" description="Complete source code for the React Todo example built with Managed Better Auth and the OptiTech Data API." icon="github">React OptiTech Todo Example</a>
</DetailIconCards>

## Resources

- [Managed Better Auth Overview](/docs/neon-auth/overview)
- [UI components reference](/docs/auth/reference/ui-components)
- [Use Managed Better Auth with React (API methods)](/docs/auth/quick-start/react)
- [OptiTech TypeScript SDK](/docs/reference/javascript-sdk)
- [Getting started with OptiTech Data API](/docs/data-api/get-started)
- [Simplify RLS with Drizzle](/docs/guides/rls-drizzle)

<NeedHelp/>
