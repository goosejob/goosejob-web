# Goosejob Web

Good job and career search platform.

Access at <https://goosejob.allnimal.com>

## Features

- Find tech jobs, along with organizations/companies/etc
- Post job listings from organizations
- See salary range clearly
- Share job post to social media with OpenGraph image
- Automatic status change after certain period

## Tech Stack

- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
  - [shadcn/ui](https://ui.shadcn.com)
- [React Router v7 Framework](https://reactrouter.com)
  - Continuation of [Remix](https://remix.run)
- [Docker](https://docker.com)
  - [Docker Compose](https://docs.docker.com/compose)
- [PostgreSQL](https://postgresql.org)
- [Prisma ORM](https://prisma.io)
- [Vercel](https://vercel.com)

## Getting Started

Install the dependencies:

```sh
bun install
```

Setup the `.env` and prepare the database instance with Docker:

```sh
bun db:up
```

Migrate the database, including generate Prisma Client and seed data:

```sh
bun db:migrate
```

Start the development server:

```sh
bun dev
```

Open at `http://localhost:5173`.

## Deployment

Create a production build:

```sh
bun run build
```
