const express = require('express');
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
} = require('../Controllers/UserController');
const auth = require('../Middleware/auth');

const userRouter = new express.Router();

userRouter.route('/newUser').post(newUser);
userRouter.route('/signUp').post(addUser);
userRouter.route('/signIn').post(signInUser);
userRouter.route('/updateUser').patch(auth, updateUser);
userRouter.route('/updateAddresses').patch(auth, updateUserAddresses);
userRouter.route('/sendOTP').post(sendOTP);
userRouter.route('/checkOTP').post(checkOTP);
userRouter.route('/getUser').get(auth, getUser);
userRouter.route('/getUserAddresses').get(auth, getUserAddresses);
userRouter.route('/getOrders').get(auth, getOrders);

module.exports = userRouter;
