const TherapistModel = require("../models/Therapists.model");
const router = require("express").Router();
const uploader = require("../middlewares/cloudinary.config");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

router.post("/create-therapist", async (req, res) => {
  try {
    const createdTherapist = await TherapistModel.create(req.body);
    res.status(201).json(createdTherapist);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.get("/all-therapists", async (req, res) => {
  try {
    const data = await TherapistModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.get("/one-therapist/:id", async (req, res) => {
  try {
    const foundTherapistById = await TherapistModel.findById(req.params.id);
    res.status(200).json(foundTherapistById);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.put("/update-therapist/:id", async (req, res) => {
  try {
    const updatedTherapist = await TherapistModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json(updatedTherapist);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.patch("/update-therapist/:id", async (req, res) => {
  try {
    const updatedTherapist = await TherapistModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json(updatedTherapist);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.delete("/delete-therapist/:id", async (req, res) => {
  try {
    const data = await TherapistModel.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

// Update profile picture
router.post(
  "/update-profile-picture/:therapistId",
  isAuthenticated,
  uploader.single("imageUrl"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          errorMessage: "No file uploaded. Please select an image.",
        });
      }
      const updatedTherapist = await TherapistModel.findByIdAndUpdate(
        req.params.therapistId,
        { profilePicture: req.file.path },
        { new: true },
      ).select("-password");
      res.status(200).json({ message: "Image updated", updatedTherapist });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: error.message });
    }
  },
);

module.exports = router;
