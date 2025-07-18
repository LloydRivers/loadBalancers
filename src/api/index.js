const express = require("express");
const app = express();
const pgp = require("pg-promise")(/* options */);
const db = pgp(process.env.DATABASE_URL);

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

app.get("/seed", async (req, res) => {
  try {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    res.send(json);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`✅ ${INSTANCE_NAME} listening on port ${PORT}`);
});
