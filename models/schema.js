const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        required: "Date is Required"
    },
    exercises: [{
        type: {
            type: String,
            required: "Type is Required"
        },
        name: {
            type: String,
            required: "Name is Required"
        },
        duration: {
            type: Number,
            required: "Duration is Required"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]},
    {toJSON: {
        virtuals: true
    }
});

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce(function(accumulate, exercise) {
    return accumulate + exercise.duration; 
    }, 0); 
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
