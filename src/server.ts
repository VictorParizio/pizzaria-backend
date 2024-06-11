import "dotenv/config";
import express from "express";
import cors from "cors";

import apiPizzarIA from "./routes";
import swaggerRouter from "./routes/swaggerRouter";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/pizzaria", apiPizzarIA);
app.use(swaggerRouter);

app.listen(PORT, () => {
  console.log(`🔥Forno acesso na PizzarIA 🍕 http://localhost:${PORT} 🔥`);
});
