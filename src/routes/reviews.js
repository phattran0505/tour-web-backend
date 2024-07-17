const express = require("express")
const router = express.Router()

const ReviewController = require("../app/controllers/reviewsController")
const {verifyUser} = require("../utils/verifyToken")

router.post("/:tourId",verifyUser,ReviewController.createReview)

module.exports = router