const express = require('express');
const cors = require('cors');
const itemRouter = require('./Routers/itemRoutes');
const userRouter = require('./Routers/UserRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/items', itemRouter);

const start = async (PORT) => {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
};

start(process.env.PORT);
