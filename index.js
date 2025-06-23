// SERVER
const express = require("express");
const cors = require("cors");
const connectDB = require("./config");
require("dotenv").config();
const app = express();
const taskRoutes = require("./routes/plannerRoutes");
const doubtRoutes = require("./routes/doubtRoutes");

// middlewares
app.use(cors());
app.use(express.json());

// testing
app.get("/", (req, res) => {
  res.send("Backend is live!");
});

app.use("/api/planner",taskRoutes);
app.use("/api/doubt",doubtRoutes);
// connecting DB
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
