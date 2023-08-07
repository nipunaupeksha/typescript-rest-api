import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

// Initialize app
const app = express();

// Use the packages
app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

// Add a listener to the server
server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});

const MONGO_URL =
  "mongodb+srv://ashly:ashly168@cluster0.ommsjch.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
