const TourModel = require("../models/Tour");
class TourController {
  // [POST]
  addTour(req, res) {
    TourModel.create(req.body)
      .then((tour) => {
        res.json({ success: true, message: "successfully", data: tour });
      })
      .catch(() => {
        res.status(200).json({ success: false, message: "failed" });
      });
  }
  // [PUT]
  updateTour(req, res) {
    TourModel.findByIdAndUpdate(req.params.id, req.body)
      .then((tour) => {
        res
          .status(200)
          .json({ success: true, message: "update successful", data: tour });
      })
      .catch((err) => {
        res.status(500).json({ success: false, message: "update failed" });
      });
  }
  // [DELETE]
  deleteTour(req, res) {
    TourModel.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json({ success: true, message: "delete successful" });
      })
      .catch(() => {
        res.status(500).json({ success: false, message: "delete failed" });
      });
  }
  // [GET]
  getAllTours(req, res) {
    const page = parseInt(req.query.page);
    TourModel.find()
      .populate("reviews")
      .skip(page * 8)
      .limit(8)
      .then((tour) => {
        res.status(200).json({
          success: true,
          count: tour.length,
          message: "get successful",
          data: tour,
        });
      })
      .catch((err) => {
        res.status(500).json({ success: false, message: "get failed" });
      });
  }
  // [GET]
  getATour(req, res) {
    TourModel.findById(req.params.id)
      .populate("reviews")
      .then((tour) => {
        res.status(200).json(tour);
      })
      .catch(() => {
        res.status(500).json({ success: false, message: "get failed" });
      });
  }
  // [GET]
  getTourBySearch(req, res) {
    // $gte means greter than equal
    const city = new RegExp(req.query.city, "i");
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    TourModel.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize }
    })
      .populate("reviews")
      .then((tour) => {
        res
          .status(200)
          .json({ success: true, message: "successful", data: tour });
      })
      .catch(() => {
        res.status(404).json({ success: false, message: "not found" });
      });
  }
  // [GET]
  getFeaturedTour(req, res) {
    TourModel.find({ featured: true })  
      .limit(8)
      .populate("reviews")
      .then((tour) => {
        res.status(200).json({
          success: true,
          message: "get success",
          data: tour,
        });
      })
      .catch(() => {
        res.status(500).json({ success: false, message: "get failed" });
      });
  }
  // [GET]
  getTourCount(req, res) {
    TourModel.estimatedDocumentCount()
      .then((tourCount) => {
        res.status(200).json({ success: true, data: tourCount });
      })
      .catch(() => {
        res.status(500).json({ success: false, message: "failed" });
      });
  }
}

module.exports = new TourController();
