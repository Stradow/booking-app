const TherapistModel = require("../models/Therapists.model");
const router = require("express").Router();

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

module.exports = router;
