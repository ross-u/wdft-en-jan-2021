const Celebrity = require("./../models/celebrity");

const express = require("express");
const router = express.Router();

// GET /celebrities/
router.get("/", (req, res, next) => {
  Celebrity.find()
    .then((allCelebrities) => {
      const data = {
        celebs: allCelebrities,
      };
      res.render("celebs-v/index", data);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

router.get("/search/:id", (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then((foundCelebrity) => {
      res.render("celebs-v/show", foundCelebrity);
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

router.get("/new", (req, res, next) => {
  res.render("celebs-v/new");
});

router.post("/create", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((error) => console.log(error));
});

router.post("/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect("/celebrities/");
    })
    .catch((err) => console.log(err));
});

router.get("/:id/edit", (req, res, next) => {
  const { id } = req.params;

  Celebrity.findById(id)
    .then((oneCelebrityDoc) => {
      console.log("oneCelebrityDoc", oneCelebrityDoc);

      const data = { oneCeleb: oneCelebrityDoc };

      res.render("celebs-v/edit", data);
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

router.post("/:id/edit", (req, res, next) => {
  const data = {
    id: req.params.id,
    name: name,
    occupation: occupation,
    catchPhrase: catchPhrase,
  };
  Celebrity.findByIdAndUpdate(req.params.id, data)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
