import { Router } from "express";
import { getProdID } from "../controllers/produtos.controller.js";

const prodRouter = Router();

prodRouter.get("/produtos/:id", getProdID);

export default prodRouter