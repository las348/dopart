const db = require("./models");
const express = require("express");
const logger = require("morgan");

module.exports = function (app) {
    db.workoutSeed.create({ name: "Campus Library" })
    .then(dbLibrary => {
      console.log(dbLibrary);
    })
    .catch(({message}) => {
      console.log(message);
    });

    app.get("/", (req, res) => {
        db.workoutSeed.find({})
            .then(dbNote => {
                res.json(dbNote);
            })
            .catch(err => {
                res.json(err);
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
        db.workoutSeed.create(body)
            .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    });


    app.post("/exercise", ({ body }, res) => {
        db.workoutSeed.create(body)
            .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    });
};