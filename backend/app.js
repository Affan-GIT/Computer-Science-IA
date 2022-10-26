const express = require("express");
const cors = require("cors");
const productRouter = require("./Routers/productRoutes");
const userRouter = require("./Routers/UserRoutes");
require("dotenv").config();
const path = require("path");

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "publicImages")));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
productRouter;
const start = async (PORT) => {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
};

start(process.env.PORT);
