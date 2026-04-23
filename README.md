# Amazon Clone - Hackathon Project

This is the main branch placeholder for the Amazon Clone project. 

## Project Structure

### Frontend (`amazon-frontend/`)
- `src/components/Navbar.jsx` - Shared
- `src/pages/ProductList.jsx` - Student 1
- `src/pages/ProductDetail.jsx` - Student 2
- `src/pages/Cart.jsx` - Student 3
- `src/pages/Login.jsx` - Student 4
- `src/pages/Signup.jsx` - Student 4
- `src/context/AuthContext.jsx` - Student 4
- `src/App.jsx` - Shared (Routes)

### Backend (`amazon-backend/`)
- `models/User.js` - Student 4
- `models/Product.js` - Student 5
- `models/Cart.js` - Student 6
- `routes/auth.js` - Student 4
- `routes/products.js` - Student 5
- `routes/cart.js` - Student 6
- `middleware/authMiddleware.js` - Student 4
- `server.js` - Main entry point

## Instructions for Team Members

1. Create a new branch named after your task (e.g., `student-1-product-listing`).
2. Implement your assigned files.
3. Push your branch and create a Pull Request.

## Setup

### Frontend
```bash
cd amazon-frontend
npm install
npm run dev
```

### Backend
```bash
cd amazon-backend
npm install
node server.js
```
