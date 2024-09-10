"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bodega_controller_1 = require("../controller/bodega.controller");
const router = (0, express_1.Router)();
router.post("/bodegas", bodega_controller_1.BodegaController.createBodega);
router.get("/bodegas", bodega_controller_1.BodegaController.getAllBodegas);
router.get("/bodegas/search", bodega_controller_1.BodegaController.filterBodega);
exports.default = router;
