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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoriaController = void 0;
const config_1 = __importDefault(require("../database/config"));
const models_1 = require("../models");
const services_1 = require("../services");
const subcategoryService = new services_1.SubcategoriesService();
class SubCategoriaController {
    static getAllSubcategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subcategories = yield subcategoryService.getAllSubcategories();
                const formattedSubcategories = subcategories.map((subcategory) => ({
                    id: subcategory.id,
                    nombre: subcategory.nombre,
                    descripcion: subcategory.descripcion,
                    categoriaNombre: subcategory.categoria.nombre,
                }));
                res.json(formattedSubcategories);
            }
            catch (err) {
                console.error("Error al obtener subcategorías:", err);
                res.status(500).json({ message: "Error al obtener subcategorías" });
            }
        });
    }
    static createSubcategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nombre, categoriaId, descripcion } = req.body;
                if (!categoriaId) {
                    res.status(400).json({ message: "categoriaId is required." });
                    return;
                }
                const categoria = yield config_1.default.getRepository(models_1.Categoria).findOneBy({ id: categoriaId });
                if (!categoria) {
                    res.status(404).json({ message: "Categoria not found." });
                    return;
                }
                const newSubcategory = yield subcategoryService.createSubcategory({
                    nombre,
                    categoria,
                    descripcion,
                });
                res.status(201).json(newSubcategory);
            }
            catch (error) {
                res.status(500).json({ message: "Error al crear la subcategoría" });
            }
        });
    }
    static getSubcategoriesByFilter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filter = req.query.filter;
                const subcategories = yield subcategoryService.getSubcategoriesByFilter(filter);
                const formattedSubcategories = subcategories.map((subcategory) => ({
                    id: subcategory.id,
                    nombre: subcategory.nombre,
                    categoriaNombre: subcategory.categoria.nombre,
                }));
                res.json(formattedSubcategories);
            }
            catch (err) {
                res.status(500).json({ message: "Error al filtrar subcategorías" });
            }
        });
    }
    static updateSubcategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const updateData = req.body;
                const updatedSubcategory = yield subcategoryService.updateSubcategories(id, updateData);
                if (updatedSubcategory) {
                    res.json(updatedSubcategory);
                }
                else {
                    res.status(404).json({ message: "Subcategoría no encontrada" });
                }
            }
            catch (err) {
                res.status(500).json({ message: "Error al actualizar la subcategoría" });
            }
        });
    }
    static deleteSubcategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deleted = yield subcategoryService.deleteSubcategory(id);
                if (deleted) {
                    res.status(204).send();
                }
                else {
                    res.status(404).json({ message: "Subcategoría no encontrada" });
                }
            }
            catch (err) {
                res.status(500).json({ message: "Error al eliminar la subcategoría" });
            }
        });
    }
}
exports.SubCategoriaController = SubCategoriaController;
