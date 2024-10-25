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
exports.SubcategoriesService = void 0;
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("../database/config"));
const Subcategoria_1 = require("../models/Subcategoria");
const Categoria_1 = require("../models/Categoria");
class SubcategoriesService {
    constructor() {
        this.subcategoriesRepository = config_1.default.getRepository(Subcategoria_1.Subcategoria);
        this.categoriesRepository = config_1.default.getRepository(Categoria_1.Categoria);
    }
    getAllSubcategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const subcategorias = yield this.subcategoriesRepository.find({
                relations: ["categoria"],
            });
            return subcategorias.map((subcategoria) => ({
                id: subcategoria.id,
                nombre: subcategoria.nombre,
                descripcion: subcategoria.descripcion,
                fechaCreacion: subcategoria.fechaCreacion,
                fechaModificacion: subcategoria.fechaModificacion,
                categoria: {
                    id: subcategoria.categoria.id,
                    nombre: subcategoria.categoria.nombre,
                    descripcion: subcategoria.categoria.descripcion,
                    fechaCreacion: subcategoria.categoria.fechaCreacion,
                    fechaModificacion: subcategoria.categoria.fechaModificacion,
                },
            }));
        });
    }
    createSubcategory(subcategoriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const subcategoria = this.subcategoriesRepository.create(subcategoriaData);
            return yield this.subcategoriesRepository.save(subcategoria);
        });
    }
    getSubcategoriesByFilter(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.subcategoriesRepository.find({
                where: {
                    nombre: (0, typeorm_1.ILike)(`%${filter}%`),
                },
                relations: ["categoria"],
            });
        });
    }
    updateSubcategories(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const subcategoria = yield this.subcategoriesRepository.findOne({
                where: { id },
                relations: ["categoria"],
            });
            if (!subcategoria)
                return null;
            if (updateData.nombre !== undefined) {
                subcategoria.nombre = updateData.nombre;
            }
            if (updateData.descripcion !== undefined) {
                subcategoria.descripcion = updateData.descripcion;
            }
            if (updateData.categoria !== undefined) {
                const categoria = yield this.categoriesRepository.findOneBy({ id: updateData.categoria.id });
                if (categoria) {
                    subcategoria.categoria = categoria;
                }
            }
            return yield this.subcategoriesRepository.save(subcategoria);
        });
    }
    deleteSubcategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.subcategoriesRepository.delete({ id });
            return result.affected !== 0;
        });
    }
}
exports.SubcategoriesService = SubcategoriesService;
