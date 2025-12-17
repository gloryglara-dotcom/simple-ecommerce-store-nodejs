const express = require("express");
const app = express();
app.use(express.json());

let products = [
  { id: 1, name: "Mobile", price: 10000 },
  { id: 2, name: "Laptop", price: 40000 }
];

let cart = [];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/cart", (req, res) => {
  cart.push(req.body);
  res.json({ message: "Added to cart" });
});

app.post("/order", (req, res) => {
  cart = [];
  res.json({ message: "Order placed successfully" });
});

app.listen(3000, () => {
  console.log("E-commerce server running on port 3000");
});
