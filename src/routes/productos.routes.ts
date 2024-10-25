import { Router } from "express";
import { ProductoControlller } from "../controller/producto.controller";

const routes = Router();

routes.post("/producto", ProductoControlller.createProdcuto);
routes.get("/producto", ProductoControlller.getProductos);
routes.delete("/producto/:id", ProductoControlller.deleteProducto);
routes.put("/prdocuto/:id", ProductoControlller.updateProducto);
routes.get("/prdocuto/search", ProductoControlller.getFilterProductos);

export default routes;
