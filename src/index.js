const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const database = require("../src/config/database");
const tourRouter = require("./routes/tours");
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const reviewRouter = require("./routes/reviews");
const bookingRouter = require("./routes/booking")
const dotenv = require("dotenv");
const app = express();

const corOptions = {
  origin:true,
  credentials:true
}
// .env
dotenv.config()
// connect databas
database.connect();

// middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

// routes
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("/api/v1/booking", bookingRouter);

app.listen(4000, (req, res) => {
  console.log("connect server successfully");
});
