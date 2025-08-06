const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

// ✅ Register the model
const Order = mongoose.model("Order", OrderSchema);

// ✅ Export the model
module.exports = Order;
