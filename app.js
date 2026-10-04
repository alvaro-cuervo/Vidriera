const express = require("express");
const products = require("./data/products");

const app = express();

app.use(express.static("public"));

app.get("/api/productos", (req, res) => {
    res.json(products);
});

app.listen(3000, () => {
    console.log("Servidor funcionando en http://localhost:3000");
});