const { errorHandler } = require("./error.js");
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  // install cookie-parser
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(404, 'Unauthorized user!'));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, 'Forbidden: Invalid token'));
    req.user = user;
    next();
  })
};

module.exports = { verifyToken }