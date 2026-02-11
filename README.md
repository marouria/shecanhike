<div align="center">

<br />

# SHE CAN HIKE

The platform that empowers women to go hiking.

<br />

[![Site](https://img.shields.io/badge/shecanhike.com-3B82F6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://shecanhike.com)

</div>

## The problem

Starting hiking or going alone can be intimidating, especially for women.

## What SHE CAN HIKE does

She can hike create a safe space where women can gather together, share their hiking experiences and connect with the outdoors safely.

## Tech stack

| Layer          | Technologies                               |
| -------------- | ------------------------------------------ |
| **Frontend**   | Nuxt 4 · Vue 3 · TypeScript · Tailwind CSS |
| **Backend**    | Strapi                                     |
| **Deployment** | Netlify                                    |

## Quick start

### Prerequisites

- Node.js 20+ (check `.nvmrc` for the exact version)
- npm (comes with Node.js)

### Project Structure

This is a monorepo with two main services:

```
shecanhike/
├── frontend/     # Nuxt 4 application (port 3000)
├── backend/      # Strapi CMS (port 1337)
└── package.json  # Root workspace configuration
```

### Installation

1. **Clone and install dependencies:**

```bash
git clone https://github.com/marouria/shecanhike.git
cd shecanhike
npm install  # Installs dependencies for both client and server
```

2. **Set up environment variables:**

We use **separate `.env` files** for client and server because:

- They have different configuration needs
- Server secrets must never be exposed to client code
- Each service can be deployed independently

Copy the example files and fill in your values:

```bash
# Server environment
cp backend/.env.example backend/.env

# Client environment
cp frontend/.env.example frontend/.env
```

Then edit each `.env` file:

- **Server** (`/backend/.env`): Generate secrets with `openssl rand -base64 32` and add your Cloudinary credentials if needed
- **Client** (`/frontend/.env`): Update API URLs for production and add analytics keys if needed

### Development

```bash
npm run dev
```

This runs:

- Client (Nuxt): http://localhost:3000
- Server (Strapi): http://localhost:1337

You can also run them individually:

```bash
npm run dev -w frontend
npm run develop -w backend
```

### Building for Production

```bash
npm run build
```
