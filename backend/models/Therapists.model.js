const { Schema, model } = require("mongoose");

const therapistsSchema = new Schema({
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Services",
      required: true,
    },
  ],

  firstName: {
    type: String,
    required: [true, "First Name is required."],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required."],
    trim: true,
  },
  bio: {
    type: String,
  },
  speciality: {
    type: String,
  },
  experience: {
    type: String,
  },
  phone: {
    type: Number,
    required: [true, "Phone Number is required."],
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  profilePicture: {
    type: String,
    default:
      "https://media.istockphoto.com/id/619400810/de/foto/mr-who.jpg?s=2048x2048&w=is&k=20&c=88ISKToIEQ6XyidL_gF_tpOI1DhX6DLECimSDiWsr34=",
  },
  languages: {
    type: [String],
  },
  isActive: {
    type: Boolean,
  },
  workingHours: {
    monday: { start: String, end: String },
    tuesday: { start: String, end: String },
    wednesday: { start: String, end: String },
    thursday: { start: String, end: String },
    friday: { start: String, end: String },
    saturday: { start: String, end: String },
    sunday: { start: String, end: String },
  },
});

const Therapists = model("Therapists", therapistsSchema);

module.exports = Therapists;
