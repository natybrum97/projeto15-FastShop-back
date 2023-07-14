import { Router } from "express";
import { getProdID, pegarProdutosPorCategoria } from "../controllers/produtos.controller.js";
import { pegarProdutos } from "../controllers/produtos.controller.js";
import { validateAuth } from "../middlewares/validateAuth.js";

const produtosRouter = Router();

produtosRouter.get("/produtos/:id", validateAuth, getProdID);
produtosRouter.get("/catalogo", validateAuth, pegarProdutos );
produtosRouter.get("/produtos/categoria/:categoria", validateAuth, pegarProdutosPorCategoria);

export default produtosRouter;

