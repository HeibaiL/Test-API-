const User = require("../models/User");
const express = require("express");
const router = express.Router();

//GET ALL THE USERS
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    console.log("Error in get", err);
  }
});
// POST USER
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    secondName: req.body.secondName
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    console.log("Error when saving", err);
  }
});
//FIND SPECIFIC USER

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (err) {
    console.log("we got error finding user", err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.remove({ _id: req.params.id });
    res.send("User has been deleted")

  } catch (err) {
    console.log("Couldn't delete", "\n", err);
  }
});
module.exports = router;
