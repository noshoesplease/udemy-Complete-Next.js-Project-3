const express = require("express");
const router = express.Router();
const { getPortfolios } = require("../controllers/portfolios");

router.get("/portfolios", getPortfolios);

module.exports = router;