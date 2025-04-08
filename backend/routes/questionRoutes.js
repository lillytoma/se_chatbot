const express = require("express");
const router = express.Router();

// Import the question controller
const { handleQuestion } = require("../controllers/questionController");

// Define the POST route to handle user questions
router.post("/askQuestion", handleQuestion);

module.exports = router;
