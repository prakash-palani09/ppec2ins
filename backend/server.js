const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors()); // Allow frontend requests
app.use(bodyParser.json());

let messages = [
  { id: 1, text: "Hello from Express API!" },
  { id: 2, text: "Welcome to AWS EC2 demo!" }
];

// GET all messages
app.get("/messages", (req, res) => {
  res.json(messages);
});

// POST a new message
app.post("/messages", (req, res) => {
  const { text } = req.body;
  const newMsg = { id: messages.length + 1, text };
  messages.push(newMsg);
  res.status(201).json(newMsg);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});