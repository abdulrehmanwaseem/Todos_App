import express, { json } from "express";
import cors from "cors";
import "dotenv/config.js";
import DbConnection from "./config/mongoDb.js";
import todos from "./routes/todos.js";
import dashboard from "./routes/dashboard.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", todos);
app.use("/api", dashboard);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  DbConnection();
  console.log(`Server is running on Port: ${PORT}`);
});
