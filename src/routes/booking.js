const express = require("express");
const router = express.Router();
const BookingController = require("../app/controllers/bookingController");
const { verifyUser,verifyAdmin } = require("../utils/verifyToken");

// create booking
router.post("/", verifyUser, BookingController.createBooking);
// get all booking
router.get("/", verifyAdmin, BookingController.getAllBooking);
// get booking
router.get("/:id", verifyUser, BookingController.getBooking);

module.exports = router;
