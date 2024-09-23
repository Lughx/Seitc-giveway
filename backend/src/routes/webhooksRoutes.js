import { Router } from "express"
import express from "express";
import { postWebhookStripe } from "../controllers/webhooksController.js";

const router = Router()

router.post("/stripe", express.raw({ type: 'application/json' }), postWebhookStripe)

export default router