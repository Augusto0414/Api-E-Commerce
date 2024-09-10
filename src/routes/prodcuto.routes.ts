import Router from "express";
import { getProduct } from "../controller/producto.controller";
import { authenticateToken } from "../middleware/authMiddleware";

const route = Router();

route.get("/products", authenticateToken, getProduct);
route.delete("/products:id", authenticateToken, getProduct);
route.post("/products", authenticateToken, getProduct);
export default route;
