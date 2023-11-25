import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes/ProductRoutes";
import userRoutes from "./routes/userRoutes/userRoutes";
import cors from "cors";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./vars/.env" });
}

const app = express();

const PORT = process.env.PORT;
const DBURI: string = process.env.dbURI!;

// Connect to MongoDB

mongoose
  .connect(DBURI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Listening to server in port", PORT);
    });
    console.log("successfully connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// // middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://127.0.0.1:3000"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
