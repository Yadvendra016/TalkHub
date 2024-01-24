import express from "express";
import authController from "./controllers/auth.controller";

const router = express.Router();

router.post("/api/send-otp", authController.sendOtp);

export default router;
