import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

//the express will take this array and call both the methods
export const protectRoute = [
  //Middleware to require authentication for user requests. 
  //Redirects unauthenticated requests to the sign-in ur
  requireAuth(),
  async (req, res, next) => {
    try {
      //userId from clerk
      const clerkId = req.auth().userId;

      if (!clerkId)
        return res.status(401).json({ msg: "Unauthorized - invalid token" });

      //find user in db by clerkId
      const user = await User.findOne({ clerkId });

      if (!user) return res.status(404).json({ msg: "User not found" });

      //attach user to request
      req.user = user;
      next();
    } catch (error) {
      console.error("Error in protect route middleware", error);
      res.status(500).json({ msg: "Internal server error" });
    }
  },
];