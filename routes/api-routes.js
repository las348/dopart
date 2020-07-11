const db = require("../models");
const path = require("path")
const logger = require("morgan");

module.exports = function (app) {

    //Last workout
    app.get("/api/workouts", (req, res) => {
        console.log("Last workout")

        db.Workout.find({}, (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.json(data);
            }
        });
    });

    // Add exercise
    app.put("/api/workouts/:id", (req, res) => {
        console.log("add exercise")

        db.Workout.update(
            {
                _id: mongojs.ObjectId(req.params.id)
            },
            {
                $set: {
                    exercises: req.body,
                    modified: Date.now()
                }
            },
            (error, data) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send(data);
                }
            }
        );
    });


    // Create Workout
    app.post("/api/workouts", ({ body }, res) => {
        console.log("create workout");
        
        const workout = new db.Workout(body);
        db.Workout.create(workout)
            .then(dbWorkout => {
                console.log(dbWorkout)
                res.json(dbWorkout);
            })
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
    });

}