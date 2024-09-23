import env from "dotenv"//.config({ path: "./.env" });
import express from "express";
import cors from "cors"
import numbersRoutes from "./routes/numbersRoutes.js"
import stripeRoutes from "./routes/stripeRoutes.js"
import webhooksRoutes from "./routes/webhooksRoutes.js"
import morgan from "morgan";

import db from "./config/database.js";
db().then(() => console.log("Conexion Ready"));

const app = express();
env.config({ path: "./.env" })

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000", "https://seitc.yats.dev/"],
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);

app.use("/webhook", webhooksRoutes)
app.use(express.json());
app.use(morgan("dev"))

// Routes
app.use("/giveway", numbersRoutes)
app.use(stripeRoutes)
app.get("/", (req, res) => {
  res.json({
    "message": "hola itcitos"
  });
});

export default app