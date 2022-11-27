const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    req.body.file ? (req.file = req.body.file) : "";
    if (req.user.email === process.env.adminEmail) {
      req.user.isAdmin = true;
    }
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
