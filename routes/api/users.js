const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
  .route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/api/users/:username"
router
  .route("/:username")
  .get(usersController.findByUserName)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/api/users/:name"
 router
  .route("/:name")
  .get(usersController.findByName)
  .put(usersController.update)
  .delete(usersController.remove);

// Matches with "/api/users/:email"
router
  .route("/:email")
  .get(usersController.findByEmail)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;