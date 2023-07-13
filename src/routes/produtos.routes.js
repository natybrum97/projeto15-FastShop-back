import { Router } from "express";
import { getProdID } from "../controllers/produtos.controller.js";
import { pegarProdutos } from "../controllers/produtos.controller.js";

const produtosRouter = Router();

produtosRouter.get("/produtos/:id", getProdID);
produtosRouter.get("/catalogo", pegarProdutos );

export default produtosRouter;

