const systemInfo = require("../systeminfo");
const express = require("express");
const router = express.Router();

router.get("/", (ree, res, next) => {
  res.send(systemInfo());
  res.end();
});

module.exports = router;
