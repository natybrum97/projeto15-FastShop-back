import { Router } from "express";
import usuariosRouter from "./usuarios.routes.js";
import prodRouter from "./produtos.routes.js";

const router = Router();

router.use(usuariosRouter);

export default router;