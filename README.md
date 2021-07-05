[https://nextjs.org/docs/deployment#docker-image](NextJS Docker (Start only))
[https://github.com/vercel/next.js/tree/canary/examples/with-docker](NextJS Example (Start only))
[https://github.com/kachar/yadi/tree/main/web/next.js](Kachar example (Start only))
[https://github.com/vercel/next.js/discussions/16995](Kachar Discussion)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## yarn commands

- dev - run the Next.js app locally on http://localhost:3000. Client side changes hot-reload
- build - build styleguide (available at /styleguide) and the Next.js app ready for deployment
- start - run a built version of the Next.js app (no hot-reloading)
- lint - run eslint checks
- lint:fix - fix eslint problems
- format - run prettier checks
- format:fix - fix prettier problems
- test - run unit tests once
- test:watch - run tests when test or tested code has changed
- test:bundle - run to ensure bundle size is at accepted level (increase size when appropriate)
- storybook - start Storybook ready for local development on http://localhost:6006/ . Changes will hot-reload

## GitHub

Workflows are set up for GitHub actions to ensure bundle size is acceptable,test and linting pass.
If deployment is set up, GitHub actions run pa11y accessibility checks on deployed URL.

## Component philosophy

The component structure follows atomic principles.
