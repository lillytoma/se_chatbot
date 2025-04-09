const express = require("express");
const cors = require("cors");
require("dotenv").config();

const questionRoutes = require("./routes/questionRoutes");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use("/", questionRoutes);

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
