const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.cookies.accessToken;
  if (!token) {
    return res
      .status(401)
      .json({ success: true, message: "you're not authorize" });
  } 
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "token is invalid" });
    }
    req.user = user;
    next();
  });
}

function verifyUser(req, res, next) {
  verifyToken(req, res, next, () => {
    if (req.params.id === user.id || user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "you're not authenticated" });
    }
  });
}

function verifyAdmin(req, res, next) {
  verifyToken(req, res, next, () => {
    if (user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "you're not authorized" });
    }
  });
}

module.exports = { verifyToken, verifyUser, verifyAdmin };
