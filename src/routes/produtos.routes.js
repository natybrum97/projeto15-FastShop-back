import { Router } from "express";
import { getProdID } from "../controllers/produtos.controller.js";
import { pegarProdutos } from "../controllers/produtos.controller.js";
import { validateAuth } from "../middlewares/validateAuth.js";

const produtosRouter = Router();

produtosRouter.get("/produtos/:id", validateAuth, getProdID);
produtosRouter.get("/catalogo", validateAuth, pegarProdutos );

export default produtosRouter;

