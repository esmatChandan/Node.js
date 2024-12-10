import { Router } from "express";
import { helthCheck } from "../controllers/helthChackController.js";

const router = Router()
 router .route('/' ).get(helthCheck)

 export default router
