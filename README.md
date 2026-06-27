# My Log Book

Site where I share my thoughts and experiences.

## Tech Stack

- [TypeScript](https://www.typescriptlang.org): Type-safe JavaScript.
- [React 19](https://react.dev): UI Framework.
- [React Router v7](https://reactrouter.com): Client-side routing for React app.
- [Vite](https://vite.dev): Build tool and development server.
- [Tailwind CSS v4](https://tailwindcss.com): Utility-first styling.
- [shadcn/ui](https://ui.shadcn.com): Accessible UI primitives (Card, Badge, Skeleton, etc.).
- [motion/react](https://motion.dev): Declarative animations for page and card transitions
- [TanStack Query](https://tanstack.com/query): Website state management.

## Content Uploading

Contents are stored in dedicated private `static-content` repository for version control. Upon changes to the `main` branch, a workflow will be triggered to deploy the assets to an `S3 Bucket`, which is then served publically by a `CloudFront distribution`.
