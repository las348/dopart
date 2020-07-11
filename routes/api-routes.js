const express = require("express");
const app = express();

const logger = require("morgan");
const Workout = require("../models/schema");

module.exports = function (app) {

    app.get("/", (req, res) => {
        db.workoutSeed.find({})
            .then(dbNote => {
                res.json(dbNote);
            })
            .catch(err => {
                res.json(err);
            });
    });

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


    app.post("/exercise?", ({ body }, res) => {
       
    });


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