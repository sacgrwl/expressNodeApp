const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express(); // Initialize Express app

// Middleware
app.use(cors({ origin: "*", methods: ["GET", "POST"] })); // Allow all origins for testing
app.use(express.json()); // Parse incoming JSON data

// Import API routes
const submitTalentForm = require("./API/submit");

// MongoDB connection
mongoose
    .connect("mongodb+srv://saacgirwel21:saacgirwel21@cluster0.czxmp.mongodb.net/isaacDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1); // Exit if the database connection fails
    });

// Root route
app.get("/", (req, res) => {
    res.send("Server is running");
});

// API routes
app.use("/submit", submitTalentForm);

// Start the server
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
