const User = require('../Database/UserDatabase');
const UserDatabase = new User();

const addUser = async (req, res) => {
  UserDatabase.createUser(req.body, res);
};

const newUser = async (req, res) => {
  UserDatabase.tempUser(req.body, res);
};

const signInUser = async (req, res) => {
  UserDatabase.SignIn(req.body, res);
};

const updateUser = async (req, res) => {
  delete req.body.token;
  UserDatabase.updateUser(req.user, req.body, res);
};

const sendOTP = async (req, res) => {
  UserDatabase.sendOTP(req.body, res);
};

const checkOTP = async (req, res) => {
  UserDatabase.checkOTP(req.body, res);
};

const getUser = async (req, res) => {
  UserDatabase.getUser(req.user, res);
};

const getUserAddresses = async (req, res) => {
  UserDatabase.getUserAddresses(req.user, res);
};

const getOrders = async (req, res) => {
  UserDatabase.getOrders(req.user, res);
};

const updateUserAddresses = async (req, res) => {
  delete req.body.token;
  UserDatabase.updateUserAddresses(req.user, req.body, res);
};

module.exports = {
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
};
