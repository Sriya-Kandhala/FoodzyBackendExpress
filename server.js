import express from "express";
import { router } from "./routes.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/v1/products", router);
app.use("/images", express.static("images"));

 

mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("MongoDB Connected"))
        .catch(err => console.log(err));

app.use("/api/v1/products", router);
app.listen(process.env.PORT, () => {
  console.log("server is running on http://localhost:3000");
});