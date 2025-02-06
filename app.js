const express = require("express");
const cors = require("cors");
const router = require("./src/routes/classifyNumberAPI");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

// cors
app.use(cors());

// routes
app.use("/api/classify-number", router);

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
