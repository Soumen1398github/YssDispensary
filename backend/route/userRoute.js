const router = require("express").Router();
const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/signup", async (req, res) => {
    console.log(req.body)
    try {
      const userExist = await userModel.findOne({ email: req.body.email });
      if (userExist) {
        return res
          .status(500)
          .send({ message: "User already Exist", success: false });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashPassword;
  
      const newUser = new userModel(req.body);
  
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
      const user = await userModel.findOne({ email: req.body.email });
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
  

      const token = jwt.sign({ userId: user._id }, "arijit", {
        expiresIn: "30d",
      });
  
      return res.status(200).send({
        message: "User login successfully",
        success: true,
        userId: user._id,
        name: user.name,
        token: token,
        success: true,
        email:user.email,
        isAdmin: user.isAdmin,
      });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  });

  module.exports = router