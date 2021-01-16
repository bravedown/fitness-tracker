const { Schema, model } = require('mongoose');

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: true
    },
    exercises: {
        type: Array,
        required: true
    }
});

module.exports = model("Workout", WorkoutSchema);