import "dotenv/config";
import express from "express";
import cors from "cors";

import apiPizzarIA from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/pizzaria", apiPizzarIA);

app.listen(PORT, () => {
  console.log(`🔥Forno acesso na PizzarIA 🍕 http://localhost:${PORT} 🔥`);
});
