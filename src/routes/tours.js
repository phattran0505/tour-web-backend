const express = require("express")
const router = express.Router()
const tourController = require("../app/controllers/tourController")
const {verifyAdmin} = require("../utils/verifyToken")

// add tour
router.post('/', verifyAdmin, tourController.addTour)
// update tour
router.put('/:id', verifyAdmin, tourController.updateTour)
// delete tour
router.delete('/:id', verifyAdmin, tourController.deleteTour)
// get all tours
router.get('/', tourController.getAllTours)
// get a tour
router.get('/:id', tourController.getATour)
// get tours by search
router.get("/search/getTourBySearch",tourController.getTourBySearch)
router.get("/search/getFeaturedTours",tourController.getFeaturedTour)
router.get("/search/getTourCount",tourController.getTourCount)

module.exports = router