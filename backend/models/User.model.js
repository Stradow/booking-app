const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required."],
      trim: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      lowercase: true,
      trim: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://media.istockphoto.com/id/619400810/de/foto/mr-who.jpg?s=2048x2048&w=is&k=20&c=88ISKToIEQ6XyidL_gF_tpOI1DhX6DLECimSDiWsr34=",
    },
    confirmation: {
      type: Boolean,
    },
    notes: {
      type: String,
    },
    isActive: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  },
);

const User = model("User", userSchema);

module.exports = User;
