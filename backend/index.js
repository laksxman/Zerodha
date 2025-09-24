// const { HoldingsModel } = require("./model/HoldingsModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");
// const authRoutes = require("./routes/auth");


// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const PORT = process.env.PORT || 3002;
// const MONGO_URL = process.env.MONGO_URL;

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());


// app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello from Zerodha Clone backend 🚀");
// });


// app.get("/allHoldings", async(req,res) => {
//     let allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
// })

// app.get("/allPositions", async(req,res) => {
//     let allPositions = await PositionsModel.find({});
//     res.json(allPositions);
// });


// app.post("/newOrder", async(req,res) => {
//     try {
//         let newOrder = new OrdersModel({
//             name: req.body.name,
//             qty: req.body.qty,
//             price: req.body.price,
//             mode: req.body.mode,
//         });

//         await newOrder.save();  // await to ensure save completes

//         res.status(201).send("Order saved!");
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Failed to save order");
//     }
// });


// app.listen(3002, ()=> {
//     console.log("App Started!");
//     mongoose.connect(MONGO_URL);
//     console.log("mongoDB connected!");

// });

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoutes = require("./routes/auth");

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Zerodha Clone backend 🚀");
});

app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).send("Failed to fetch holdings");
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).send("Failed to fetch positions");
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.status(201).send("Order saved!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to save order");
  }
});

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected!");
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
    process.exit(1); 
  });
