const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello secret user");
});

module.exports = router;
