const express = require("express");
const cors = require("cors");

const testRoute = require("./routes/testRoute");
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio API Running Successfully 🚀",
  });
});

// API Routes
app.use("/api", testRoute);

app.use("/api", contactRoutes);

app.use("/api", authRoutes);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

module.exports = app;