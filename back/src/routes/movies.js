const { Router } = require("express");
const moviesController = require("../controllers/moviesController");

const router = Router();

router.get("/movies", moviesController.getController);
router.post("/movies", moviesController.postController);

module.exports = router;
