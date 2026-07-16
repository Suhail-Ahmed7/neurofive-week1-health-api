const express = require("express");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

//Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "NeuroFive Week 1 API is running",
  });
});

// Health-check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

module.exports = app;
