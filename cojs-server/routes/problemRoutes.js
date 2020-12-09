import express from "express";
import {
  getProblems,
  getProblemById,
  deleteProblem,
  createProblem,
  updateProblem,
} from "../controllers/problemController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.get("/", getProblems);
router.route("/").post(protect, admin, createProblem);

router.get("/:id", getProblemById);
router.route("/:id").delete(protect, admin, deleteProblem);
router.route("/:id").put(protect, admin, updateProblem);

export default router;
