const { learningItems } = require("./data/learningData");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Babua LearnOS backend running");
});
// Dashboard API
app.get("/api/dashboard", (req, res) => {
  res.json({
    todayPlan: learningItems,
    streak: 3
  });
});

// Get single learning item
app.get("/api/learn/:id", (req, res) => {
  const item = learningItems.find(
    (i) => i.id === req.params.id
  );

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
});

// Stuck submission
app.post("/api/stuck", (req, res) => {
  const { itemId, whatTried, whereStuck, helpType } = req.body;

  console.log("Stuck request received:", {
    itemId,
    whatTried,
    whereStuck,
    helpType
  });

  res.json({
    message: "Stuck request received successfully"
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
