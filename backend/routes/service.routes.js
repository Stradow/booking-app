const ServiceModel = require("../models/Services.model");
const router = require("express").Router();

router.post("/create-service", async (req, res) => {
  try {
    const createdService = await ServiceModel.create(req.body);
    res.status(201).json(createdService);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.get("/all-services", async (req, res) => {
  try {
    const data = await ServiceModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.get("/one-service/:id", async (req, res) => {
  try {
    const foundServiceById = await ServiceModel.findById(req.params.id);
    res.status(200).json(foundServiceById);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.put("/update-service/:id", async (req, res) => {
  try {
    const updatedService = await ServiceModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.patch("/update-service/:id", async (req, res) => {
  try {
    const updatedService = await ServiceModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.status(200).json(updatedService);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.delete("/delete-service/:id", async (req, res) => {
  try {
    const data = await ServiceModel.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

module.exports = router;
