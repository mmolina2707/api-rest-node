import express from "express";
const app = express();



app.get("/", (req, res) => {
    res.json({'message': "Bienvenidos a nuestra API REST!"});
})

import productsRouter from './src/routes/products.router.js';
app.use(productsRouter);

import notFound from "./src/middlewares/not-found.js";
app.use(notFound);

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));