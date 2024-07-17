const BookingModel = require("../models/Booking");

class BookingController {
  // [POST]
  createBooking(req, res) {
    BookingModel.create(req.body)
      .then((booking) => {
        res
          .status(200)
          .json({
            success: true,
            message: "your tour is booked",
            data: booking,
          });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ success: false, message: "internal server error" });
      });
  }
  // [GET]
  getAllBooking(req,res){
    BookingModel.find()
      .then(booking=>{
        res.status(200).json({success:true,message:"successful",data:booking})
      })
      .catch(err=>{
        res.status(404).json({success:false,message:"not found"})
      })
  }
   // [GET]
   getBooking(req,res){
    BookingModel.findById(req.params.id)
      .then(booking=>{
        res.status(200).json({success:true,message:"successful",data:booking})
      })
      .catch((err)=>{
        res.status(404).json({success:false,message:"not found"})
      })
  }
}

module.exports = new BookingController();
