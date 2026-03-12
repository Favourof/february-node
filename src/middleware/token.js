const jwt = require("jsonwebtoken");
const env = require("../config/env");
const authenticate = async (req, res, next) => {
  const autheader = req.headers.authorization;

  if (!autheader || !autheader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Acces denied, no token provided" });
  }

  const token = autheader.split(" ")[1];
  console.log(token);

  try {
    const decoded = jwt.verify(token, env.jwt_secrect);
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }

  next();
};

module.exports = authenticate;
