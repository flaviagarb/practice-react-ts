# NodePop - React TypeScript Client

A front-end web application built with **React**, **TypeScript**, and **Vite**, for browsing, creating, filtering and deleting product advertisements. It connects to a backend Node.js API and provides a clean and modern user interface with filters and authentication.

## Live Demo

👉 Not deployed yet – run locally following instructions below.

---

## Tech Stack

- **React 19** with **TypeScript**
- **Vite** for bundling
- **Tailwind CSS** for styling
- **Axios** for HTTP requests
- **React Router DOM** for routing
- **Zustand-like custom Auth Context**
- **CSS Modules** and custom component styles

---

## Folder Structure

```
src/
├── api/               # Axios client setup
├── assets/            # Custom SVG assets
├── components/        # Reusable UI components
│   ├── ui/            # Layout, form, dialog, etc.
├── pages/             # Page-level views
│   ├── adverts/       # Listing, detail, create advert
│   ├── auth/          # Login and auth context
├── utils/             # Utility functions (storage, styles)
public/                # Static files (fallback images, etc.)
```

---

## Getting Started

### 1. Clone the project

```bash
git clone https://github.com/flaviagarb/practice-react-ts.git
cd practice-react-ts
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the backend (separately)

Make sure your **Node.js backend** is running at:

```
http://localhost:3001
```

> If you don't have it yet, clone and run the backend:  
> [https://github.com/keepcoding-tech/nodepop](https://github.com/keepcoding-tech/nodepop)

### 4. Start the frontend

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## Features

- ✅ Login with token-based auth
- ✅ "Remember me" option
- ✅ List adverts
- ✅ Filter by **type** (Buy/Sell)
- ✅ Filter by **tags**
- ✅ View advert detail
- ✅ Create new advert (with image)
- ✅ Delete advert (with confirm modal)

---

## Authentication

- Auth token is stored in localStorage
- Protected routes redirect to login if unauthenticated
- Custom context handles login/logout across app

---

## Endpoints Used

These endpoints come from the backend API `http://localhost:3001/api/v1`:

| Method | Endpoint        | Description                |
| ------ | --------------- | -------------------------- |
| POST   | `/auth/login`   | Log in with email/password |
| GET    | `/auth/me`      | Get current logged user    |
| GET    | `/adverts`      | Get all adverts            |
| GET    | `/adverts/:id`  | Get single advert by ID    |
| POST   | `/adverts`      | Create a new advert        |
| DELETE | `/adverts/:id`  | Delete an advert by ID     |
| GET    | `/adverts/tags` | Get all available tags     |

---

## Referenced Resources

- [NodePop Backend Repo](https://github.com/keepcoding-tech/nodepop)
- [Swagger API Docs](http://localhost:3001/swagger/)
- [React Router DOM](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Context](https://reactjs.org/docs/context.html)

---

## Assets

- Fallback image: `/public/descarga.png`
- Logo: `/public/nodepoplg.svg`
- Additional icons: `/src/assets/*.svg`

---

## Author

Made by Flavia Garbetta · Bootcamp Full Stack @ KeepCoding
