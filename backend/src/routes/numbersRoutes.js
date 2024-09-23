import { Router } from "express";
import { deleteEmptysIntends, getGiveway, getIntent, getIntents, postCreateGiveway } from "../controllers/numbersController.js";

const router = Router()

router.get("/get/:id", getGiveway)
router.get("/intent/:id", getIntent)
router.post("/", postCreateGiveway)
router.delete("/empty/intents", deleteEmptysIntends)
router.get("/intents", getIntents)

export default router