import express from "express";
import dotenv from "dotenv";
import route from "./routes/index";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.set("port", PORT);
app.use(express.json());
app.use(route);

export default app;
