import express from "express";
import {
  getProblems,
  getProblemById,
} from "../controllers/problemController.js";
const router = express.Router();

// @desc fetch all problems
// @route GET /api/v1/problems
// @access public
// router.route("/").get(getProblems);
router.get("/", getProblems);

// @desc fetch single problem
// @route GET /api/v1/problems/:id
// @access public
router.route("/:id").get(getProblemById);

export default router;
