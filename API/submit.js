const express = require("express");
const router = express.Router();
const Form = require("../models/Form"); // Ensure you import your Form model

// POST route to submit a form
router.post("/", async (req, res) => {
    const { name, age, email, talent } = req.body;

    // Validate input data
    if (!name || !age || !email || !talent) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // Create a new form entry
        const formEntry = new Form({ name, age, email, talent });
        const savedEntry = await formEntry.save(); // Save to MongoDB

        console.log("Saved Data:", savedEntry);
        return res.status(201).json({
            message: "Form submitted successfully",
            data: savedEntry
        });
    } catch (error) {
        console.error("Error saving form data:", error);

        // Handle duplicate email error (if email is unique in the schema)
        if (error.code === 11000) {
            return res.status(400).json({ message: "Email already exists!" });
        }

        // Handle other potential errors
        return res.status(500).json({ message: "An error occurred while saving the form data." });
    }
});

module.exports = router;