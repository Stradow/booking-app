const AppointmentModel = require("../models/Appointments.model");
const router = require("express").Router();

router.post("/create-appointment", async (req, res) => {
  try {
    const createdAppointment = await AppointmentModel.create(req.body);
    res.status(201).json(createdAppointment);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.get("/all-appointments", async (req, res) => {
  try {
    const data = await AppointmentModel.find()
      .populate("userId", "firstName lastName phone")
      .populate("therapistId", "firstName lastName")
      .populate("serviceId", "name duration price");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.get("/one-appointment/:id", async (req, res) => {
  try {
    const foundAppointmentById = await AppointmentModel.findById(req.params.id);
    res.status(200).json(foundAppointmentById);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.put("/update-appointment/:id", async (req, res) => {
  try {
    const updateAppointment = await AppointmentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    )
      .populate("userId", "firstName lastName phone")
      .populate("serviceId", "name duration price");
    res.status(200).json(updateAppointment);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.patch("/update-appointment/:id", async (req, res) => {
  try {
    const updateAppointment = await AppointmentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    )
      .populate("userId", "firstName lastName phone")
      .populate("serviceId", "name duration price");

    res.status(200).json(updateAppointment);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

router.delete("/delete-appointment/:id", async (req, res) => {
  try {
    const data = await AppointmentModel.findByIdAndDelete(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

module.exports = router;
