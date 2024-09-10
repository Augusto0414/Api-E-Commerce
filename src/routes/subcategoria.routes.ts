import { Router } from "express";
import { SubCategoriaController } from "../controller/subcategoria.controller";
const routes = Router();

routes.post("/subcategories", SubCategoriaController.createSubcategory);
routes.get("/subcategories", SubCategoriaController.getAllSubcategories);
routes.get("/subcategories/search", SubCategoriaController.getSubcategoriesByFilter);
routes.put("/subcategories/:id", SubCategoriaController.updateSubcategory);
routes.delete("/subcategories/:id", SubCategoriaController.deleteSubcategory);

export default routes;
