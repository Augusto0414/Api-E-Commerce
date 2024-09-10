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
exports.CategoriaController = void 0;
const categoria_service_1 = require("../services/categoria.service");
const categoriaService = new categoria_service_1.CategoriaService();
class CategoriaController {
    static createCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoriaData = req.body;
                const categoria = yield categoriaService.createCategoria(categoriaData);
                res.status(201).json(categoria);
            }
            catch (error) {
                res.status(500).json({ message: "Error al crear la categoría", error });
            }
        });
    }
    static getAllCategorias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categorias = yield categoriaService.getAllCategorias();
                res.json(categorias);
            }
            catch (error) {
                res.status(500).json({ message: "Error al obtener las categorías", error });
            }
        });
    }
    static getCategoriasByFilter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filter = req.query.filter;
                if (!filter) {
                    res.status(400).json({ message: "El filtro es requerido" });
                    return;
                }
                const categorias = yield categoriaService.getCategoriasByFilter(filter);
                res.json(categorias);
            }
            catch (error) {
                res.status(500).json({ message: "Error al obtener las categorías por filtro", error });
            }
        });
    }
    static updateCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params; // Obtener el id de la categoría desde los parámetros de la URL
                const updateData = req.body; // Obtener los datos de actualización desde el cuerpo de la solicitud
                const updatedCategoria = yield categoriaService.updateCategoria(id, updateData);
                if (updatedCategoria) {
                    res.json(updatedCategoria);
                }
                else {
                    res.status(404).json({ message: "Categoría no encontrada" });
                }
            }
            catch (error) {
                res.status(500).json({ message: "Error al actualizar la categoría", error });
            }
        });
    }
    static deleteCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const success = yield categoriaService.deleteCategoria(id);
                if (success) {
                    res.status(204).send(); // Responder con un estado 204 (No Content) si la eliminación fue exitosa
                }
                else {
                    res.status(404).json({ message: "Categoría no encontrada" });
                }
            }
            catch (error) {
                res.status(500).json({ message: "Error al eliminar la categoría", error });
            }
        });
    }
}
exports.CategoriaController = CategoriaController;
