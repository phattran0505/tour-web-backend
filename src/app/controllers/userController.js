const UserModel = require("../models/User");

class UserController {
  // [POST]
  addUser(req, res) {
    UserModel.create(req.body)
      .then((user) => {
        res
          .status(200)
          .json({ succes: true, message: "add successful", data: user });
      })
      .catch(() => {
        res.status(500).json({ succes: false, message: "add failed" });
      });
  }
  // [PUT]
  updateUser(req, res) {
    UserModel.findByIdAndUpdate(req.params.id, req.body)
      .then((user) => {
        res
          .status(200)
          .json({ succes: true, message: "update successful", data: user });
      })
      .create(() => {
        res.status(500).json({ succes: false, message: "update failed" });
      });
  }
  // [DELETE]
  deleteUser(req, res) {
    UserModel.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json({ succes: true, message: "delete successful" });
      })
      .catch(() => {
        res.status(500).json({ succes: false, message: "delete failed" });
      });
  }
  // [GET]
  getAllUser(req, res) {
    UserModel.find()
        .then((user)=>{
            res.status(200).json({succes:true,message:"get successful",data:user})
        })
        .catch(()=>{
            res.status(500).json({succes:false,message:"get failed"})
        })
  }
  // [GET]
  getAUser(req, res) {
    UserModel.findById(req.params.id)
        .then(user=>{
            res.status(200).json({succes:true,message:"get successful", data:user})
        })
        .catch(()=>{
            res.status(500).json({succes:false,message:"get failed"})
        })
  }
}

module.exports = new UserController();
