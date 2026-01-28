const router = require("express").Router();
const TherapistModel = require("../models/Therapists.model");

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const { OAuth2Client } = require("google-auth-library");

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ errorMessage: "Email and password are required" });
  }

  try {
    const therapistAlreadyInDB = await TherapistModel.findOne({ email });

    if (therapistAlreadyInDB) {
      return res.status(403).json({ errorMessage: "Email already used" });
    } else {
      const theSalt = bcryptjs.genSaltSync(12);
      const theHashedPassword = bcryptjs.hashSync(password, theSalt);

      const hashedTherapist = {
        ...req.body,
        password: theHashedPassword,
      };

      const createdTherapist = await TherapistModel.create(hashedTherapist);
      res.status(201).json(createdTherapist);
    }
  } catch (error) {
    console.log("SIGNUP ERROR:", error);
    res.status(500).json({ errorMessage: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ errorMessage: "Email and password required" });
  }

  try {
    const therapistAlreadyInDB = await TherapistModel.findOne({ email }).select(
      "+password",
    );
    if (!therapistAlreadyInDB) {
      return res.status(403).json({ errorMessage: "Email not found" });
    } else {
      const doesPasswordMatch = bcryptjs.compareSync(
        password,
        therapistAlreadyInDB.password,
      );
      if (!doesPasswordMatch) {
        return res.status(403).json({ errorMessage: "Wrong Password" });
      } else {
        const payload = { _id: therapistAlreadyInDB._id };
        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
          algorithm: "HS256",
          expiresIn: "6h",
        });
        res.status(200).json({ message: "you are now logged in", authToken });
      }
    }
  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({ errorMessage: error.message });
  }
});

router.post("/google", async (req, res) => {
  const { idToken } = req.body;

  if (!idToken) {
    return res.status(400).json({ errorMessage: "Missing Google token" });
  }
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const {
      sub: googleId,
      email,
      given_name: firstName,
      family_name: lastName,
      picture,
    } = payload;

    if (!email) {
      return res
        .status(400)
        .json({ errorMessage: "Google account has no email" });
    }

    let therapist = await TherapistModel.findOne({ email });

    if (!therapist) {
      therapist = await TherapistModel.create({
        email,
        firstName,
        lastName,
        googleId,
        profilePicture: picture,
        isActive: true,
      });
    }

    const jwtPayload = { _id: therapist._id };

    const authToken = jwt.sign(jwtPayload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "6h",
    });

    res.status(200).json({ authToken });
  } catch (error) {
    console.error("GOOGLE AUTH ERROR:", error);
    res.status(401).json({ errorMessage: "Invalid Google token" });
  }
});

router.get("/verify", isAuthenticated, async (req, res) => {
  try {
    const therapist = await TherapistModel.findById(req.payload._id).select(
      "-password -email",
    );
    res.status(200).json(therapist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

module.exports = router;
