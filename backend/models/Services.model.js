const { Schema, model } = require("mongoose");

const servicesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  therapistId: {
    type: Schema.Types.ObjectId,
    ref: "Therapists",
    required: true,
  },
});

const Services = model("Services", servicesSchema);

module.exports = Services;
