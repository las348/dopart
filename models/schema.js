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
    }]
});

// WorkoutSchema.methods.setTotalDuration = function() {
//     this.totalDuration = `${this.duration}`;

//     return this.totalDuration;
// }

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
