const { Schema, model } = require("mongosee");

const appointmentsSchema = new Schema({});

const Appointments = model("Appointments", appointmentsSchema);

module.exports = Appointments;
