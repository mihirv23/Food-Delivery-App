# 🍽️ Food Delivery App

A full-stack food delivery solution built with React (frontend) and Node.js/Express (backend), featuring secure authentication (JWT, bcrypt), modular hooks, and complete order management logic.

---

## Features

- ✅ User signup/login with secure hashed passwords (`bcrypt`)  
- ✅ JSON Web Token (JWT) based authenticated sessions  
- ✅ Full order workflow: browse menu, cart operations, place orders  
- ✅ Admin endpoints for managing menu and orders  
- ✅ React context & custom hooks for state management & API calls  
- ✅ Responsive UI and clean architecture for easy enhancements  

---

## Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Frontend   | React, React Router, Axios, Context API |
| Backend    | Node.js, Express, JWT, bcrypt, MongoDB/Mongoose |
| Dev Tools  | ESLint, Prettier, Nodemon |

---

## Architecture Overview

The app consists of two main parts:

- **Backend** (Node.js + Express + MongoDB):  
  - Handles authentication (bcrypt + JWT)  
  - Defines REST APIs for menu, cart, order, and user management  
  - Protects routes with JWT middleware  

- **Frontend** (React):  
  - Uses custom hooks for API interaction and state upkeep  
  - Provides separate screens: Menu, Cart, Orders, Login/Register  
  - Stores auth token in context/localStorage for persistence  

---

## Getting Started

### Prerequisites

- Node.js & npm  
- MongoDB (local or Atlas)  

### Installation

```bash
# Backend setup
cd backend
npm install
cp .env.example .env
# Fill in environment variables: MONGO_URI, JWT_SECRET, etc.

# Frontend setup
cd ../frontend
npm install
```
## Running the App
```bash

# In one terminal (Backend)
cd backend
npm run dev

# In another terminal (Frontend)
cd frontend
npm start
```
## Backend Overview

### Authentication & Security
📌 Passwords are hashed with bcrypt before saving to MongoDB
📌 Login/signup flows issue JWT tokens
📌 Protected Express routes use middleware to verify JWTs and attach user data


## Frontend Overview

### Custom Hooks

useAuth() – Manages login, signup, logout and stores token in context/localStorage

useFetch() – A reusable hook using Axios to call API, handles loading and error state

useCart() – Handles cart logic: add/remove items, calculate totals, sync with backend

useOrders() – Fetches order history and submits new orders

## Screenshots
![image](https://github.com/user-attachments/assets/fb1b5b12-49aa-445f-a9b1-d20d13b0aae2) ![image](https://github.com/user-attachments/assets/f4d2bcbe-8773-4f92-a56d-9a41940d3e17)

![image](https://github.com/user-attachments/assets/363ee6ff-2d54-42c9-adeb-2f09c5f01f9d)


