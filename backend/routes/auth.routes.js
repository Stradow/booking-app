const router = require("express").Router();
const UserModel = require("../models/User.model");

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { isAuthenticated } = require("");

router.post("/singup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userAlreadyInDB = await UserModel.findOne({ email });
    if (userAlreadyInDB) {
      res.status(403).json({ errorMessage: "Email already used" });
    } else {
      const theSalt = bcryptjs.genSaltSync(12);
      const theHashedPassword = bcryptjs.hashSync(password, theSalt);
      const hashedUser = {
        ...req.body,
        password: theHashedPassword,
      };
      const createdUser = await UserModel.create(hashedUser);
      res.status(201).json(createdUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userAlreadyInDB = await UserModel.findOne({ email });
    if (!userAlreadyInDB) {
      res.status(403).json({ errorMessage: "Email already used" });
    } else {
      const doesPasswordMatch = bcryptjs.compareSync(
        password,
        userAlreadyInDB.password
      );
      if (!doesPasswordMatch) {
        res.status(403).json({ errorMessage: "Wrong Password" });
      } else {
        const payload = { _id: userAlreadyInDB._id };
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algoritm: "HS256",
          expiresIn: "6h",
        });
        res.status(200).json({ message: "you are now logged in", authToken });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: error });
  }
});

router.get("/verify", async (req, res) => {
  const currentLoggedInUser = await UserModel.findById(req.payload._id).select(
    "-password -email"
  );
  res.status(200).json({ message: "Token is valid: ", currentLoggedInUser });
});

module.exports = router;
