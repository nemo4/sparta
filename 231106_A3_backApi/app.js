const express = require('express');
const app = express();
const port = 3000;

const goodsRouter = require("./routes/goods");
const productsRouter = require("./routes/products.router");

// middle ware json data 
app.use(express.json());

// router
app.use("/api", [productsRouter]);


const connect = require("./schemas");
connect();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});