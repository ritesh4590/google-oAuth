dotenv.config();
import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import "./config/Passport.js";

import ConnectDB from "./DB/ConnectDB.js";
import AuthRoutes from "./routes/AuthRoutes.js";

const PORT = process.env.PORT || 8000;

ConnectDB(process.env.MONGO_URI);

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PATCH,DELETE",
    credentials: true,
  })
);

app.use(express.json());

app.use(AuthRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at Port:${PORT}`);
});
