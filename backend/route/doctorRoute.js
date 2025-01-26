const router = require("express").Router();
const dctrModel = require("../model/dctrModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bookModel = require("../model/bbokMode");
router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const userExist = await dctrModel.findOne({ email: req.body.email });
    if (userExist) {
      return res
        .status(500)
        .send({ message: "User already Exist", success: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword;

    const newUser = new dctrModel(req.body);

    await newUser.save();
    res.status(200).send({
      message: "USer created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const user = await dctrModel.findOne({ email: req.body.email });
    if (!user) {
      res.status(500).send({ message: "user don't exist" });
      return;
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(500).send({ message: "Error" });
    }

    const token = jwt.sign({ userId: user._id }, "bibek", {
      expiresIn: "30d",
    });

    return res.status(200).send({
      message: "User login successfully",
      success: true,
      userId: user._id,
      name: user.name,
      token: token,
      success: true,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("/book-data", async (req, res) => {
  try {
    console.log(req.body);
    const data1 = await bookModel.findOne({
      date: req.body.date,
      stime: req.body.stime,
    });
    if (data1) {
      return res.status(201).send({
        message: "Slot already Booked",
        success: false,
      });
    }
    const serachData = await bookModel.findOne({ date: req.body.date });
    if (serachData) {
      const timeCompare = await bookModel.findOne({
        date: req.body.date,
        stime: { $lte: req.body.stime },
        etime: { $gte: req.body.stime },
      });

      if (timeCompare) {
        return res.status(201).send({
          message: "Slot already Booked",
          success: false,
        });
      }
    }

    const data = new bookModel(req.body);
    await data.save();
    return res.status(200).send({
      message: "Booked succesfully",
      success: true,
    });
  } catch (error) {
    return res.status(501).send({
      message: error.message,
    });
  }
});

router.get("/book-data-get-admin", async (req, res) => {
  const data = await bookModel.find({});
  return res.status(200).send({
    message: "Send succesfullt",
    success: true,
    data: data,
  });
});
module.exports = router;
