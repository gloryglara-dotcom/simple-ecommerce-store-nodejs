const express = require("express");
const app = express();
app.use(express.json());

let users = [];
let products = [
  { id: 1, name: "Mobile", price: 10000 },
  { id: 2, name: "Laptop", price: 40000 }
];
let cart = [];

app.post("/register", (req, res) => {
  users.push(req.body);
  res.json({ message: "User registered" });
});

app.post("/login", (req, res) => {
  res.json({ message: "Login successful" });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/cart", (req, res) => {
  cart.push(req.body);
  res.json({ message: "Added to cart" });
});

app.post("/order", (req, res) => {
  cart = [];
  res.json({ message: "Order placed" });
});

app.listen(3000, () =>
  console.log("E-commerce app running on port 3000")
);

