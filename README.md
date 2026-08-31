### Ember-IQ
<!-- One-line description + language/framework badges -->
**EmberIQ** is a full-stack remote interview platform that enables companies to conduct and manage technical interviews online. It includes real-time coding, interview management, and communication features, built with modern web technologies.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=flat-square&logo=javascript)
![React](https://img.shields.io/badge/React-18+-61dafb?style=flat-square&logo=react)
![Express](https://img.shields.io/badge/Express-4+-000000?style=flat-square&logo=express)
![Vite](https://img.shields.io/badge/Vite-4+-646cff?style=flat-square&logo=vite)
![Mongoose](https://img.shields.io/badge/Mongoose-6+-880000?style=flat-square&logo=mongoose)

## Overview

Ember-IQ is a full-stack web application organized as a monorepo, combining a robust Express backend and a modern React frontend. It provides user authentication powered by Clerk, real-time chat functionality via Stream Chat, and video integration. The frontend leverages React Query for state management and Tailwind CSS for styling. Designed for extensibility and maintainability, Ember-IQ separates frontend and backend logic for streamlined development.

## Tech Stack

- **Languages**
  - JavaScript
  - HTML
  - CSS
- **Backend**
  - Express
  - Mongoose
  - Clerk (authentication)
  - Stream Chat (real-time chat)
  - Stream Video SDK
- **Frontend**
  - React
  - Vite
  - React Query
  - Clerk React
  - Tailwind CSS
- **Dev Tools**
  - Nodemon
  - ESLint
  - DaisyUI

## Prerequisites

- **Node.js** (version 16 or higher recommended)
- **npm** (version 7 or higher)
- Environment variables for Clerk, Stream Chat, MongoDB, and video SDK credentials

## Installation

Clone the repository and install dependencies for both backend and frontend:

```bash
# Clone the repository
git clone https://github.com/anuj-yadav-git/Ember-IQ.git
cd Ember-IQ

# Install backend dependencies
npm install --prefix backend

# Install frontend dependencies
npm install --prefix frontend
```

## Usage

### Running the Backend

```bash
# Start backend server
npm run start --prefix backend
```

### Running the Frontend

```bash
# Start frontend development server
npm run dev --prefix frontend
```

### Building Frontend for Production

```bash
# Build frontend assets
npm run build --prefix frontend
```

### Additional Commands

- **Lint code:**  
  ```bash
  npm run lint --prefix frontend
  ```
- **Preview production build:**  
  ```bash
  npm run preview --prefix frontend
  ```

## Project Structure

```
Ember-IQ/
├── backend/
│   ├── package.json
│   ├── src/
│   │   ├── controllers/    # API controllers (users, auth, chat, video)
│   │   ├── lib/            # Utility libraries
│   │   ├── middlewares/    # Express middlewares
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API route definitions
│   │   └── server.js       # Main Express server
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── hero.png        # Static assets
│   ├── src/
│   │   ├── App.jsx         # Root React component
│   │   ├── api/            # API utilities
│   │   ├── components/     # UI components
│   │   ├── data/           # Static data
│   │   ├── hooks/          # Custom React hooks
│   │   ├── index.css       # Global styles
│   │   ├── lib/            # Shared libraries
│   │   ├── main.jsx        # App entry point
│   │   └── pages/          # Route pages
│   ├── vite.config.js      # Vite configuration
├── notes.txt               # Project notes
├── package.json            # Root package.json
└── README.md
```

## API Endpoints

| Method | Endpoint   | Description              |
|--------|------------|--------------------------|
| GET    | /users     | Retrieve user data       |
| POST   | /users     | Create new user          |
| GET    | /auth      | Authentication status    |
| POST   | /auth      | Authenticate user        |
| GET    | /chat      | Fetch chat messages      |
| POST   | /chat      | Send chat message        |
| GET    | /video     | Retrieve video info      |
| POST   | /video     | Start/modify video data  |

## Contributing

1. **Fork** the repository
2. **Create a branch** (`git checkout -b feature/your-feature`)
3. **Commit your changes**
4. **Push** to your fork
5. **Open a Pull Request** against the `main` branch


