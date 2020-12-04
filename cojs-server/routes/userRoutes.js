import express from "express";
import { authUser } from "../controllers/userController.js";
const router = express.Router();

// @desc Auth user & get token
// @route POST /api/v1/users/signin
// @access public
router.post("/signin", authUser);

export default router;
