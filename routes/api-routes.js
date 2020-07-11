const logger = require("morgan");
const db = require("../models");
const Workout = require("../models/schema");

module.exports = function (app) {

    app.get("/api/workouts" , (req, res) => {
        
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err)
        });
    });


    app.get("/stats", (req, res) => {
        db.workoutSeed.find({})
            .then(dbNote => {
                res.json(dbNote);
            })
            .catch(err => {
                res.json(err);
            });
    });


    app.post("/exercise/:id", ({ body }, res) => {
       
    });

    // New Workout
    app.post("/exercise", ({ body }, res) => {
        const exercise = new Workout(body);
        // User.setTotalDuration();

        Workout.create(exercise)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

};