# 🛒 React Cart App

This is a simple React-based cart project that calculates the total cost of items in the cart using the `reduce()` method.

## 🚀 Features

- Add products to cart (with price).
- Calculates and displays total cost dynamically.
- React hooks (`useState`, `useEffect`) used for state management.

##🌐 Live Demo
👉 https://chemical-low.surge.sh/

## 🧠 Key Concepts

- `useState` is used to manage cart items and total cost.
- `reduce()` is used to calculate total cost from the cart list:
```js
const newTotalCost = cartList.reduce((total, cart) => total + parseInt(cart.price), 0);




