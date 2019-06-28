var express = require("../node_modules/express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.json([
        {
          "tittle": "Sara come culos",
          "genres": ["Fiction", "Novel"],
          "id": 0,
          "price": "20"
        },
        {
          "tittle": "The Picture of Dorian Gray",
          "genres": ["Fiction", "Horror"],
          "id": 1,
          "price": "12"
        },
        {
          "tittle": "The Hitchhiker's Guide to the Galaxy",
          "genres": ["The true", "Number 42"],
          "id": 2,
          "price": "42"
        },
        {
          "tittle": "The Little Prince",
          "genres": ["Novel", "Drama", "Poem"],
          "id": 3,
          "price": "23"
        }
      ]);
});

module.exports = router;
