const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    fullName: {
      type: String,
      required: true,
    },
    tourName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bookAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const BookingModel = mongoose.model("bookings", bookingSchema);

module.exports = BookingModel;