import passport from "passport";

const googleLogin = async () => {
  return passport.authenticate("google", { scope: ["profile", "email"] });
};

const loginSuccess = async (req, res) => {
  if (req.user) {
    return res.status(200).send({ success: true, user: req.user });
  } else {
    return res.status(400).send({ success: false, message: "Not Authorized!" });
  }
};

const logoutUser = async (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("http://localhost:5173/login");
  });
};

export { loginSuccess, logoutUser, googleLogin };
