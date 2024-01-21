import express from "express";
import passport from "passport";
import {
  googleLogin,
  loginSuccess,
  logoutUser,
} from "../controllers/AuthController.js";

const router = express.Router();

router.route("/auth/google").get(googleLogin);

router.route("/auth/google/callback").get(
  passport.authenticate("google", {
    successRedirect: process.env.SUCCESS_URL,
    failureRedirect: process.env.FAILURE_URL,
  })
);

router.route("/login/success").get(loginSuccess);

router.route("/logout").get(logoutUser);

export default router;
