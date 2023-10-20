# Headless WordPress + Next.js Static Site Generator


## Prerequisites
- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.js.org/en/installation)
- [Docker](https://www.docker.com/products/docker-desktop)


# Getting Started
- Clone this repo
- Run `pnpm i` to install dependencies
- Copy `wordpress/.env.example` to `wordpress/.env` and fill create new credentials
- Run `pnpm dev` to start the development server
- open browser at localhost/wp-admin to login to WordPress
- open browser at localhost:3000 to view the Next.js site


OR
- Run `pnpm build` to build Static Site for production
- deploy `next/dist` folder to your server
