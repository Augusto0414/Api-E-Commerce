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
exports.CategoriaService = void 0;
const Categoria_1 = require("../models/Categoria");
const config_1 = __importDefault(require("../database/config"));
const typeorm_1 = require("typeorm");
class CategoriaService {
    constructor() {
        this.categoriaRepository = config_1.default.getRepository(Categoria_1.Categoria);
    }
    createCategoria(categoriaData) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoria = this.categoriaRepository.create(categoriaData);
            return yield this.categoriaRepository.save(categoria);
        });
    }
    getAllCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoriaRepository.find();
        });
    }
    getCategoriasByFilter(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoriaRepository.find({
                where: {
                    nombre: (0, typeorm_1.ILike)(`%${filter}%`),
                },
            });
        });
    }
    updateCategoria(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoria = yield this.categoriaRepository.findOne({ where: { id } });
            if (!categoria) {
                return null;
            }
            const updatedCategoria = this.categoriaRepository.merge(categoria, updateData);
            return yield this.categoriaRepository.save(updatedCategoria);
        });
    }
    deleteCategoria(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.categoriaRepository.delete(id);
            return result.affected !== 0;
        });
    }
}
exports.CategoriaService = CategoriaService;
