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
  },
});

const Services = model("Services", servicesSchema);

module.exports = Services;
