import './instrumentation.js';
import express from "express";
import routes from "./routes/index.js";
import loggingMiddleware from "./middleware/logging.js";

const app = express();

app.use(loggingMiddleware);
app.use(express.json());
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
