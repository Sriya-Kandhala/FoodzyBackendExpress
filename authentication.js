
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

const authenticate = (req, res, next) => {
  try {
    // 1. Get the Authorization header
    const authHeader = req.headers['authorization'];
    if (!authHeader||!authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    // 2. Extract the token from header (expects "Bearer <token>")
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    // 3. Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Attach decoded payload to request
    req.user = decoded;

    // 5. Call next middleware
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export{authenticate};
