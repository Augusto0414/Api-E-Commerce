import { Router } from "express";
import cliente from "./cliente.routes";
import producto from "./prodcuto.routes";
import category from "./categoria.routes";
import subcategory from "./subcategoria.routes";
import bodega from "./bodega.routes";
const routes = Router();

routes.use(category);
routes.use(subcategory);
routes.use(cliente);
routes.use(producto);
routes.use(bodega);
export default routes;
