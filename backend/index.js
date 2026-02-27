require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const authRoutes = require("./routes/auth");
const auth = require("./middleware/auth");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Auth routes
app.use("/api/auth", authRoutes);

// Protected routes
app.get("/allHoldings", auth, async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", auth, async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", auth, async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    userId: req.user.id, 
  });

  await newOrder.save();
  res.json({ msg: "Order saved!" });
});

app.get("/orders", auth, async (req, res) => {
  const orders = await OrdersModel.find({ userId: req.user.id });
  res.json(orders);
});

app.listen(PORT, () => {
  console.log("Backend running");
  mongoose.connect(uri);
});