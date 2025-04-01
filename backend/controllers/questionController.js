const { generateAnswerFromPPT } = require("../utils/pptParser");

// Handles incoming API requests to answer questions based on PowerPoint content
exports.handleQuestion = async (req, res) => {
  try {
    const { question } = req.body;

    // Log incoming question for debugging
    console.log("Received question:", question);

    // Validate input
    if (!question || question.trim() === "") {
      return res.status(400).json({ answer: "No question provided." });
    }

    // Generate AI-powered answer
    const answer = await generateAnswerFromPPT(question);

    // Log AI response
    console.log("GPT answer:", answer);

    // Send answer back to frontend
    res.json({ answer });
  } catch (error) {
    console.error("Error generating answer:", error.message);
    res.status(500).json({ answer: "Internal server error." });
  }
};
