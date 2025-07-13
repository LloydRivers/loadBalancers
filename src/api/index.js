const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const INSTANCE_NAME = process.env.INSTANCE_NAME || "unknown";

app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url} - ${INSTANCE_NAME}`
  );
  next();
});

app.get("/", (req, res) => {
  res.send(`Hello from ${INSTANCE_NAME} at ${new Date().toISOString()}`);
});

app.listen(PORT, () => {
  console.log(`✅ ${INSTANCE_NAME} listening on port ${PORT}`);
});
