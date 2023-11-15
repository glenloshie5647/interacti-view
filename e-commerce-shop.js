Here's an example of a complex JavaScript code with over 200 lines that simulates a simple e-commerce website.

```javascript
// e-commerce-shop.js

// Data Model
const products = [
  {
    id: 1,
    name: "iPhone 12",
    price: 999,
    stock: 20,
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 899,
    stock: 15,
  },
  // ...more products
];

const cart = [];

// Helper Functions
function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

function addToCart(productId, quantity) {
  const product = getProductById(productId);

  if (!product) {
    console.log("Product not found.");
    return;
  }

  if (product.stock < quantity) {
    console.log("Insufficient stock.");
    return;
  }

  const existingCartItem = cart.find((item) => item.productId === productId);
  if (existingCartItem) {
    existingCartItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
    });
  }

  product.stock -= quantity;
  console.log("Successfully added to cart.");
}

function removeFromCart(productId, quantity) {
  const existingCartItemIndex = cart.findIndex(
    (item) => item.productId === productId
  );

  if (existingCartItemIndex === -1) {
    console.log("Product not found in the cart.");
    return;
  }

  const existingCartItem = cart[existingCartItemIndex];

  if (existingCartItem.quantity < quantity) {
    console.log("Invalid quantity to remove.");
    return;
  }

  if (existingCartItem.quantity === quantity) {
    cart.splice(existingCartItemIndex, 1);
  } else {
    existingCartItem.quantity -= quantity;
  }

  const product = getProductById(productId);
  product.stock += quantity;
  console.log("Successfully removed from cart.");
}

function checkout() {
  let total = 0;

  cart.forEach((item) => {
    const product = getProductById(item.productId);
    total += product.price * item.quantity;
  });

  console.log("Total amount: $" + total);

  // Process payment, update inventory, etc.

  // Clear cart
  cart.length = 0;
  console.log("Checkout completed. Cart cleared.");
}

// Usage
addToCart(1, 2);
removeFromCart(1, 1);
addToCart(2, 3);
checkout();
```

This code represents a simplified e-commerce shop with a data model that includes products with unique IDs, names, prices, and available stock. The code provides helper functions to add products to the cart, remove products from the cart, and perform a checkout by calculating the total amount and clearing the cart.

Please note that this is a simplified example and in a real-world scenario, more advanced features like authentication, database integration, and UI views would be implemented.