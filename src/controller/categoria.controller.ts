import { Request, Response } from "express";
import { CategoriaService } from "../services/categoria.service";

const categoriaService = new CategoriaService();

export class CategoriaController {
  static async createCategoria(req: Request, res: Response): Promise<void> {
    try {
      const categoriaData = req.body;
      const categoria = await categoriaService.createCategoria(categoriaData);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(500).json({ message: "Error al crear la categoría", error });
    }
  }

  static async getAllCategorias(req: Request, res: Response): Promise<void> {
    try {
      const categorias = await categoriaService.getAllCategorias();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las categorías", error });
    }
  }

  static async getCategoriasByFilter(req: Request, res: Response): Promise<void> {
    try {
      const filter = req.query.filter as string;
      if (!filter) {
        res.status(400).json({ message: "El filtro es requerido" });
        return;
      }
      const categorias = await categoriaService.getCategoriasByFilter(filter);
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las categorías por filtro", error });
    }
  }

  static async updateCategoria(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params; // Obtener el id de la categoría desde los parámetros de la URL
      const updateData = req.body; // Obtener los datos de actualización desde el cuerpo de la solicitud

      const updatedCategoria = await categoriaService.updateCategoria(id, updateData);

      if (updatedCategoria) {
        res.json(updatedCategoria);
      } else {
        res.status(404).json({ message: "Categoría no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar la categoría", error });
    }
  }

  static async deleteCategoria(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const success = await categoriaService.deleteCategoria(id);

      if (success) {
        res.status(204).send(); // Responder con un estado 204 (No Content) si la eliminación fue exitosa
      } else {
        res.status(404).json({ message: "Categoría no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar la categoría", error });
    }
  }
}
