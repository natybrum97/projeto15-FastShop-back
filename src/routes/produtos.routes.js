import { Router } from "express";
import { pegarProdutos } from "../controllers/produtos.controller.js";

const produtosRouter = Router();

produtosRouter.get("/catalogo", pegarProdutos );

export default produtosRouter;