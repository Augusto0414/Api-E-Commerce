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
exports.ProductoService = void 0;
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("../database/config"));
const Producto_1 = require("../models/Producto");
class ProductoService {
    constructor() {
        this.productoRepository = config_1.default.getRepository(Producto_1.Producto);
    }
    getAllProducto() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productoRepository.find({
                relations: ["categoria", "subcategoria"],
            });
        });
    }
    createProducto(producto) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProducto = this.productoRepository.create(producto);
            return yield this.productoRepository.save(newProducto);
        });
    }
    deleteProducto(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteProduct = yield this.productoRepository.delete(id);
            return deleteProduct.affected !== 0;
        });
    }
    updateProdcuto(id, producto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateProdut = yield this.productoRepository.findOne({ where: { id } });
            if (!updateProdut) {
                throw new Error("No se encontro este producto para hacer el update");
            }
            const dataUpdate = this.productoRepository.merge(Object.assign(Object.assign({}, updateProdut), producto));
            return yield this.productoRepository.save(dataUpdate);
        });
    }
    getFilterProductos(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productoRepository.find({
                where: {
                    nombre: (0, typeorm_1.ILike)(`%${filter}%`),
                },
                relations: ["categoria", "subcategoria"],
            });
        });
    }
}
exports.ProductoService = ProductoService;
