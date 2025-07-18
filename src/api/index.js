const express = require("express");
const app = express();
const routes = require("./routes");
const loggingMiddleware = require("./middleware/logging");

app.use(loggingMiddleware);
app.use(express.json());
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
