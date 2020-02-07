const User = require("../models/User");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    console.log("Error in get", err);
  }
});

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
module.exports = router;
