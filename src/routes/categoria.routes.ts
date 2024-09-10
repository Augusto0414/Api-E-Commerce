import { Router } from "express";
import { CategoriaController } from "../controller/categoria.controller";

const routes = Router();

routes.post("/categories", CategoriaController.createCategoria);
routes.get("/categories", CategoriaController.getAllCategorias);
routes.get("/categorias/search", CategoriaController.getCategoriasByFilter);
routes.put("/categories/:id", CategoriaController.updateCategoria);
routes.delete("/categories/:id", CategoriaController.deleteCategoria);
export default routes;
