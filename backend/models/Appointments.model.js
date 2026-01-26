const { Schema, model } = require("mongoose");

const appointmentsSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    therapistId: {
      type: Schema.Types.ObjectId,
      ref: "Therapists",
      required: true,
    },
    serviceId: [
      {
        type: Schema.Types.ObjectId,
        ref: "Services",
        required: true,
      },
    ],
    startAt: {
      type: Date,
      default: Date.now,
    },
    endAt: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed", "no-show"],
      default: "pending",
    },
    priceSnapShot: {
      type: Number,
    },
    durationSnapShot: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

const Appointments = model("Appointments", appointmentsSchema);

module.exports = Appointments;
