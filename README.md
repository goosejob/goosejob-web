# Goosejob Web

Good job and career search platform.

Access at <https://goosejob.com>

## Features

- Find tech jobs and companies
- Post job listings
- See salary range

## Tech Stack

- React
- Tailwind CSS
  - shadcn/ui
- React Router v7 Framework
- Docker
- PostgreSQL
- Drizzle ORM
  - [Example project for Drizzle ORM + Cloudflare Worker + Neon Serverless](https://github.com/drizzle-team/drizzle-orm/tree/main/examples/neon-cloudflare)

## Development

Install the dependencies:

```sh
bun install
```

Start the development server:

```sh
bun run dev
```

Open at `http://localhost:5173`.

## Deployment

Create a production build:

```sh
bun run build
```

Deployment is done using the Cloudflare Wrangler CLI.

To deploy directly to production:

```sh
bunx wrangler deploy
```

To deploy a preview URL:

```sh
bunx wrangler versions upload
```

Promote a version to production after verification or roll it out progressively.

```sh
bunx wrangler versions deploy
```
