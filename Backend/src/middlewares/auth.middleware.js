// import { ApiError } from "../utils/apiError.js";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// import { User } from "../models/user.models.js";

// dotenv.config();

// export const verifyJwt = async (req, res, next) => {
//   try {
//     const token =
//       req.cookies?.accessToken ||
//       req.header("Authorization")?.replace("Bearer ", "");

//     if (!token) {
//       throw new ApiError(401, "Un-Authorized access");
//     }

//     const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

//     const user = await User.findById(decodedToken?._id);

//     if (!user) {
//       throw new ApiError(401, "Invalid access token");
//     }

//     req.user = user;
//     next(); // pass control to the next middleware
//   } catch (error) {
//     next(new ApiError(401, error.message));
//   }
// };


import { ApiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models/user.models.js";

dotenv.config();


export const verifyJwt = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    const decodedToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid access token",
      });
    }

    req.user = user;

    return next(); // ✅ SAFE

  } catch (error) {
    console.error("JWT ERROR:", error);

    return res.status(401).json({
      success: false,
      message: error.message || "Invalid token",
    });
  }
};