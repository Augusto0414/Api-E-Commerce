import { Router } from "express";
import { BodegaController } from "../controller/bodega.controller";
const router = Router();

router.post("/bodegas", BodegaController.createBodega);
router.get("/bodegas", BodegaController.getAllBodegas);
router.get("/bodegas/search", BodegaController.filterBodega);
router.put("/bodegas/:id", BodegaController.updateBodega);
router.delete("/bodegas/:id", BodegaController.deleteBodega);

export default router;
