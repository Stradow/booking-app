const { Schema, model } = require("mongoose");

const appointmentsSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    therapistId: {
      type: Schema.Types.ObjectId,
      ref: "Therapist",
      required: true,
    },
    serviceId: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    startAt: {
      type: Date,
      default: Date.now,
    },
    endAt: {
      Date,
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
