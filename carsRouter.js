const express = require("express");
const db = require("./utils/db");

const router = express.Router();

router.get("/", (req, res) => {
    //    select  *   from  cars
    // db.select('*').from('cars').then().catch();
  db("cars")
    .then(car => {
      res.json(car);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to retrieve cars" });
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    db("cars")
        .where("id", "=", id)
        .first()
        .then(car => {
            res.json(car);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve the car" });
        });
});

router.post("/", (req, res) => {
    const newCar = req.body;
    db("cars")
        .insert(newCar) // with SQLite, by default it returns an array with the last id
        .then(ids => {
          db("cars")
            .where({ id: ids[0] })
            .then(car => {
            res.status(201).json(car);
          });
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to store the car, boooo..." });
    });
});

router.put("/:id", (req, res) => {
  const changes = req.body;
  db("cars")
    .where({ id: req.params.id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update car, boooo..." });
    });
});

router.delete("/:id", (req, res) => {
    db("cars")
      .where({ id: req.params.id })
      .del()
      .then(count => {
        res.status(200).json(count);
    })
      .catch(err => {
        res.status(500).json({ message: "Failed to delete car, boooo." });
    });
});


module.exports = router;
