# 🍽️ Food Delivery App

A full-stack food delivery solution built with React (frontend) and Node.js/Express (backend), featuring secure authentication (JWT, bcrypt), modular hooks, and complete order management logic.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Architecture Overview](#architecture-overview)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running the App](#running-the-app)  
- [Backend Overview](#backend-overview)  
  - [Authentication & Security](#authentication--security)  
  - [API Endpoints](#api-endpoints)  
- [Frontend Overview](#frontend-overview)  
  - [Custom Hooks](#custom-hooks)  
- [Folder Structure](#folder-structure)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [License](#license)

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
| Deployment | (e.g., Heroku, Vercel, MongoDB Atlas) |

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

## Running the App


# In one terminal (Backend)
cd backend
npm run dev

# In another terminal (Frontend)
cd frontend
npm start
```
# Backend Overview

### Authentication & Security
📌 Passwords are hashed with bcrypt before saving to MongoDB

📌 Login/signup flows issue JWT tokens

📌 Protected Express routes use middleware to verify JWTs and attach user data

# API Endpoints

POST /api/auth/register – register a new user

POST /api/auth/login – login and receive JWT

GET /api/menu – get available food items

POST /api/cart – add/update cart

GET /api/orders – view your past orders

POST /api/orders – place a new order

GET /api/admin/orders – (admin only) fetch all orders

# Frontend Overview

## Custom Hooks
useAuth() – Manages login, signup, logout and stores token in context/localStorage

useFetch() – A reusable hook using Axios to call API, handles loading and error state

useCart() – Handles cart logic: add/remove items, calculate totals, sync with backend

useOrders() – Fetches order history and submits new orders
