import { Request, Response } from "express";
import { ProductoService } from "../services/producto.service";
import { error } from "console";

const productoService = new ProductoService();
export class ProductoControlller {
  static async getProductos(req: Request, res: Response): Promise<void> {
    try {
      const productos = await productoService.getAllProducto();
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
    } catch (error) {
      res.status(500).json({ error: error, message: "Error al obtener los productos" });
    }
  }

  static async createProdcuto(req: Request, res: Response): Promise<void> {
    const data = req.body;
    try {
      const response = await productoService.createProducto(data);
      res.status(200).json(response);
    } catch (error) {}
  }
  static async deleteProducto(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = await productoService.deleteProducto(id);
      if (!data) res.status(404).json({ message: "Producto no encontrado para eliminar" });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error, message: "Error al intentar eliminar el producto" });
    }
  }

  static async updateProducto(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const data = await productoService.updateProdcuto(id, updateData);
      if (!data) res.status(404).json({ error: "Error al intentar actualizar este producto" });
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error, message: "Error en el servidor al intentar actualizar el producto" });
    }
  }

  static async getFilterProductos(req: Request, res: Response): Promise<void> {
    try {
      const filter = req.query.filter as string;
      if (!filter) {
        res.status(400).json({ message: "El filtro es requerido" });
        return;
      }

      const productos = await productoService.getFilterProductos(filter);
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
    } catch (error) {
      res.status(500).json({ error: error, message: "Error al obtener los productos por filtro" });
    }
  }
}
