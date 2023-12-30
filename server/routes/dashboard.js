import express from "express";
import { getDashboard } from "../controller/dashboard.js";

const router = express.Router();

router.route("/dashboard").get(getDashboard);

export default router;
