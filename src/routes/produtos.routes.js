import { Router } from "express";
import { deletaProduto, deletaTudoDoCarrinho, getProdID, pegarCarrinho, pegarProdutosPorCategoria, postRegistraCarrinho,registraCompra } from "../controllers/produtos.controller.js";
import { pegarProdutos } from "../controllers/produtos.controller.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { schemaCompra } from "../schemas/compras.schemas.js";

const produtosRouter = Router();

produtosRouter.get("/produtos/:id", validateAuth, getProdID);
produtosRouter.get("/catalogo", validateAuth, pegarProdutos );
produtosRouter.get("/produtos/categoria/:categoria", validateAuth, pegarProdutosPorCategoria);
produtosRouter.post("/carrinho", validateAuth, postRegistraCarrinho);
produtosRouter.get("/carrinho", validateAuth, pegarCarrinho );
produtosRouter.delete("/carrinho/:id", validateAuth, deletaProduto);
produtosRouter.delete("/carrinho", validateAuth, deletaTudoDoCarrinho);
produtosRouter.post("/compra",validateAuth,validateSchema(schemaCompra),registraCompra);


export default produtosRouter;

