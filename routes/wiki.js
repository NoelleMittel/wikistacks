const express = require("express");
const router = express.Router();
const { Page, User } = require("../models");

// GET / users;
router.get("/", async (req, res, next) => {
  res.send("got to GET /wiki/");
});

router.get("/", async (req, res, next) => {
  res.send("got to POST /wiki/");
});

router.get("/add", async (req, res, next) => {
  res.send("go to GET /wiki/add");
});

module.exports = router;
