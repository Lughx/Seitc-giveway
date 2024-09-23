import { Router } from "express";
import { getConfig, postPaymentIntent } from "../controllers/stripeController.js";

const router = Router()

router.get("/config", getConfig)
router.post("/create-payment-intent", postPaymentIntent)

export default router