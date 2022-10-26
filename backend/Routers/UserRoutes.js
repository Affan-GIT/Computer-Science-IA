const express = require("express");
const {
  addUser,
  signInUser,
  updateUser,
  sendOTP,
  checkOTP,
  newUser,
  getUser,
  getUserAddresses,
  getOrders,
  updateUserAddresses,
  updateProfilePic,
  getProfilePic,
} = require("../Controllers/UserController");
const auth = require("../Middleware/auth");
const multer = require("multer");
const path = require("path");

const userRouter = new express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "userImages/");
  },
  filename: function (req, file, cb) {
    req.savedName = Date.now();
    cb(null, req.savedName + ".webp"); //Appending .jpg
  },
});

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Set the filetypes, it is optional
    var filetypes = /jpeg|jpg|png|webp/;
    var mimetype = filetypes.test(file.mimetype);

    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(
      "Error: File upload only supports the " +
        "following filetypes - " +
        filetypes
    );
  },

  // mypic is the name of file attribute
}).single("profilePic");

userRouter.route("/newUser").post(newUser);
userRouter.route("/signUp").post(addUser);
userRouter.route("/signIn").post(signInUser);
userRouter.route("/updateUser").patch(auth, updateUser);
userRouter.route("/updateAddresses").patch(auth, updateUserAddresses);
userRouter.route("/sendOTP").post(sendOTP);
userRouter.route("/checkOTP").post(checkOTP);
userRouter.route("/getUser").get(auth, getUser);
userRouter.route("/getUserAddresses").get(auth, getUserAddresses);
userRouter.route("/getOrders").get(auth, getOrders);
userRouter.route("/updateProfilePic").post(auth, upload, updateProfilePic);
userRouter.route("/getProfilePic").get(auth, getProfilePic);

module.exports = userRouter;
