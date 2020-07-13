const db = require("../models");
const logger = require("morgan");


module.exports = function (app) {

    //Last workout
    app.get("/api/workouts", (req, res) => {
        console.log("Last workout")

        db.Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
          });
    });

    // Add exercise
    // findOneAndUpdate(conditions, update, callback) 
    app.put("/api/workouts/:id", (req, res) => {
        console.log("add exercise")

        db.Workout.findOneAndUpdate({_id: req.params.id},
            {
                $push: {
                    exercises: req.body,
                    modified: Date.now()
                }
            }, { new: true })
            .then(dbWorkout => {
                res.json(dbWorkout);
              })
              .catch(err => {
                res.json(err);
              });
    });

 
    // Create Workout
    app.post("/api/workouts", ({body}, res) => {
        console.log("create workout");

        db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
    });

    app.get("/api/workouts/range", (req, res) => {
       
        db.Workout.find({}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
        
    })

}