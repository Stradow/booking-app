const UserModel = require("../models/User.model");
const router = require("express").Router();
const uploader = require("../middlewares/cloudinary.config");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

router.post("/create-user", async (req, res) => {
  try {
    const createdUser = await UserModel.create(req.body);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.get("/all-users", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.status(200).json(data);
  } catch (error) {
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

// Update profile picture
router.post(
  "/update-profile-picture/:userId",
  isAuthenticated,
  uploader.single("imageUrl"),
  async (req, res) => {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.userId,
        { profilePicture: req.file.path },
        { new: true },
      ).select("-password");
      res.status(200).json({ message: "Image updated", updatedUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },
);

module.exports = router;
