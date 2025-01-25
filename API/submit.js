const express = require("express");
const router = express.Router();
const Workout = require("../Models/workoutTracker");

// Route to handle workout submissions
router.post("/", async (req, res) => {
    const { workoutType, duration, date } = req.body;

    if (!workoutType || !duration || !date) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const newWorkout = new Workout({ workoutType, duration, date });
        const savedWorkout = await newWorkout.save();
        res.status(201).json({ message: "Workout logged successfully!", workout: savedWorkout });
    } catch (error) {
        console.error("Error saving workout:", error);
        res.status(500).json({ error: "Failed to save workout." });
    }
});

// Route to fetch all logged workouts (optional)
router.get("/", async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (error) {
        console.error("Error fetching workouts:", error);
        res.status(500).json({ error: "Failed to fetch workouts." });
    }
});

module.exports = router;
