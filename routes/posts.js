const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on post");
});
router.get("/something", (req, res) => {
  res.send("SOmething");
});

module.exports = router;
