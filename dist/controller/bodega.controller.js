"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodegaController = void 0;
const services_1 = require("../services");
const bodegasService = new services_1.BodegaService();
class BodegaController {
    static createBodega(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body); // Verifica qué datos están llegando
                const dataBodega = req.body;
                const newBodega = yield bodegasService.createBodega(dataBodega);
                res.status(201).json(newBodega);
            }
            catch (error) {
                res.status(500).json({ message: "Error al crear la bodega", error });
            }
        });
    }
    static getAllBodegas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bodegas = yield bodegasService.getAllBodegas();
                res.json(bodegas);
            }
            catch (error) {
                res.status(500).json({ message: "Error al obtener las bodegas", error });
            }
        });
    }
    static deleteBodega(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const deleted = yield bodegasService.deleteBodega(id);
                if (deleted) {
                    res.status(204).send();
                }
                else {
                    res.status(404).json({ message: "Bodega no encontrada" });
                }
            }
            catch (error) {
                res.status(500).json({ message: "Error al eliminar la bodega", error });
            }
        });
    }
    static filterBodega(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filter = req.query.filter;
                if (!filter) {
                    res.status(400).json({ message: "El filtro es requerido" });
                    return;
                }
                const bodegas = yield bodegasService.getFilterBodega(filter);
                res.json(bodegas);
            }
            catch (error) {
                res.status(500).json({ message: "Error al filtrar las bodegas", error });
            }
        });
    }
    static updateBodega(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const dataBodega = req.body;
                const updatedBodega = yield bodegasService.updateBodega(id, dataBodega);
                res.json(updatedBodega);
            }
            catch (error) {
                res.status(500).json({ message: "Error al actualizar la bodega", error });
            }
        });
    }
}
exports.BodegaController = BodegaController;
