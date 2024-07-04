import express from "express";
import multer from "multer";
import {
  getEmployeeProfile,
  registerEmployee,
  updateEmployeeProfile,
} from "../controllers/employee.controller";
import { authenticateToken } from "../middleware/auth.middleware";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Public route
router.post("/register", registerEmployee);

// Protected routes
router.get("/profile", authenticateToken, getEmployeeProfile);
router.put(
  "/profile",
  authenticateToken,
  upload.single("resume"),
  updateEmployeeProfile
);

export default router;
