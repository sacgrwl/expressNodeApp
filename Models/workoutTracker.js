const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
    workoutType: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("Workout", workoutSchema);
