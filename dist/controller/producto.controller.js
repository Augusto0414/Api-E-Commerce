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
exports.ProductoControlller = void 0;
const producto_service_1 = require("../services/producto.service");
const productoService = new producto_service_1.ProductoService();
class ProductoControlller {
    static getProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productos = yield productoService.getAllProducto();
                const response = productos.map((producto) => ({
                    id: producto.id,
                    nombre: producto.nombre,
                    descripcion: producto.descripcion,
                    precio: producto.precio,
                    esActivo: producto.esActivo,
                    categoria: producto.categoria ? producto.categoria.nombre : "Sin categoría",
                    subcategoria: producto.subcategoria ? producto.subcategoria.nombre : "Sin subcategoría",
                    fechaCreacion: producto.fechaCreacion,
                    fechaModificacion: producto.fechaModificacion,
                }));
                res.status(200).json(response);
            }
            catch (error) {
                res.status(500).json({ error: error, message: "Error al obtener los productos" });
            }
        });
    }
    static createProdcuto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            try {
                const response = yield productoService.createProducto(data);
                res.status(200).json(response);
            }
            catch (error) { }
        });
    }
    static deleteProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = yield productoService.deleteProducto(id);
                if (!data)
                    res.status(404).json({ message: "Producto no encontrado para eliminar" });
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ error: error, message: "Error al eliminar el producto" });
            }
        });
    }
    static updateProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updateData = req.body;
                const data = yield productoService.updateProdcuto(id, updateData);
                if (!data)
                    res.status(404).json({ error: "Error al intentar actualizar este producto" });
                res.status(200).json(data);
            }
            catch (error) {
                res.status(500).json({ error: error, message: "Error en el servidor al intentar actualizar el producto" });
            }
        });
    }
    static getFilterProductos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const filter = req.query.filter;
                if (!filter) {
                    res.status(400).json({ message: "El filtro es requerido" });
                    return;
                }
                const productos = yield productoService.getFilterProductos(filter);
                const response = productos.map((producto) => ({
                    id: producto.id,
                    nombre: producto.nombre,
                    descripcion: producto.descripcion,
                    precio: producto.precio,
                    esActivo: producto.esActivo,
                    categoria: producto.categoria ? producto.categoria.nombre : "Sin categoría",
                    subcategoria: producto.subcategoria ? producto.subcategoria.nombre : "Sin subcategoría",
                    fechaCreacion: producto.fechaCreacion,
                    fechaModificacion: producto.fechaModificacion,
                }));
                res.status(200).json(response);
            }
            catch (error) {
                res.status(500).json({ error: error, message: "Error al obtener los productos por filtro" });
            }
        });
    }
}
exports.ProductoControlller = ProductoControlller;
