const ReviewModel = require("../models/Review")
const TourModel = require("../models/Tour")

class ReviewController {
    createReview(req,res){
        ReviewModel.create(req.body)
            .then(review=>{
                TourModel.findByIdAndUpdate(req.params.tourId, {$push:{reviews: review._id}})
                    .then(()=>{
                        res.status(200).json({succes:true,message:"review submitted",data:review})
                    })
            })
            .catch((err)=>{
                res.status(500).json({succes:false,message:"failed to submit"})
            })
    }
}

module.exports = new ReviewController()