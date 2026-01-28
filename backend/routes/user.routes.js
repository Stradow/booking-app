const UserModel = require("../models/User.model");
const router = require("express").Router();
const uploader = require("../middlewares/cloudinary.config");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

router.post("/create-user", async (req, res) => {
  try {
    // Check if user with this phone already exists
    let existingUser = null;

    if (req.body.phone) {
      existingUser = await UserModel.findOne({ phone: req.body.phone });
    }

    if (!existingUser && req.body.email) {
      existingUser = await UserModel.findOne({ email: req.body.email });
    }

    if (existingUser) {
      // Return existing user with 200 status
      console.log("User already exists, returning:", existingUser._id);
      return res.status(200).json(existingUser);
    }

    // Create new user if doesn't exist
    const createdUser = await UserModel.create(req.body);
    console.log("New user created:", createdUser._id);
    res.status(201).json(createdUser);
  } catch (error) {
    console.error("Create User Error:", error);
    console.error("Error details:", error.message);

    // Handle duplicate key errors
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      console.log(`Duplicate ${field} detected`);

      // Try to find and return existing user
      const duplicateUser = await UserModel.findOne({
        [field]: req.body[field],
      });
      if (duplicateUser) {
        return res.status(200).json(duplicateUser);
      }

      return res.status(400).json({
        errorMessage: `A user with this ${field} already exists`,
      });
    }

    res
      .status(500)
      .json({ errorMessage: error.message || "Failed to create user" });
  }
});

router.get("/all-users", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.status(200).json(data);
  } catch (error) {
    console.error("Get Users Error:", error);
    res.status(500).json({ errorMessage: error });
  }
});

router.get("/one-user/:id", async (req, res) => {
  try {
    const foundUserById = await UserModel.findById(req.params.id);
    res.status(200).json(foundUserById);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.put("/update-user/:id", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.patch("/update-user/:id", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.delete("/delete-user/:id", async (req, res) => {
  try {
    const data = await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

module.exports = router;
