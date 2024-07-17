const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/User");

const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });
    await newUser.save();
    res.status(200).json({ success: true, message: "create successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: "create failed" });
  }
};


const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found !!!" });
    }
    const checkedPassword = bcrypt.compare(req.body.password, user.password);
    if (!checkedPassword) {
      res.status(401).json({ success: false, message: "incorrect password" });
    }
    const { password, role, ...rest } = user._doc;
    
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    res
      .cookie("accessToken", token)
      .status(200)
      .json({
        success: true,
        message: "successful",
        token,
        role,
        data: { ...rest },
      });
  } catch (error) {}
};

module.exports = { register, login };
