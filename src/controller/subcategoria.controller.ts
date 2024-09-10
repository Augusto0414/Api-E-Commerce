import pool from "../database/config";
import { Categoria } from "../models";
import { SubcategoriesService } from "../services";
import { Request, Response } from "express";

const subcategoryService = new SubcategoriesService();

export class SubCategoriaController {
  static async getAllSubcategories(req: Request, res: Response): Promise<void> {
    try {
      const subcategories = await subcategoryService.getAllSubcategories();

      const formattedSubcategories = subcategories.map((subcategory) => ({
        id: subcategory.id,
        nombre: subcategory.nombre,
        descripcion: subcategory.descripcion,
        categoriaNombre: subcategory.categoria.nombre,
      }));

      res.json(formattedSubcategories);
    } catch (err) {
      console.error("Error al obtener subcategorías:", err);
      res.status(500).json({ message: "Error al obtener subcategorías" });
    }
  }

  static async createSubcategory(req: Request, res: Response): Promise<void> {
    try {
      const { nombre, categoriaId, descripcion } = req.body;

      if (!categoriaId) {
        res.status(400).json({ message: "categoriaId is required." });
        return;
      }

      const categoria = await pool.getRepository(Categoria).findOneBy({ id: categoriaId });

      if (!categoria) {
        res.status(404).json({ message: "Categoria not found." });
        return;
      }

      const newSubcategory = await subcategoryService.createSubcategory({
        nombre,
        categoria,
        descripcion,
      });

      res.status(201).json(newSubcategory);
    } catch (error) {
      res.status(500).json({ message: "Error al crear la subcategoría" });
    }
  }

  static async getSubcategoriesByFilter(req: Request, res: Response): Promise<void> {
    try {
      const filter = req.query.filter as string;
      const subcategories = await subcategoryService.getSubcategoriesByFilter(filter);
      const formattedSubcategories = subcategories.map((subcategory) => ({
        id: subcategory.id,
        nombre: subcategory.nombre,
        categoriaNombre: subcategory.categoria.nombre,
      }));
      res.json(formattedSubcategories);
    } catch (err) {
      res.status(500).json({ message: "Error al filtrar subcategorías" });
    }
  }

  static async updateSubcategory(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const updateData = req.body;
      const updatedSubcategory = await subcategoryService.updateSubcategories(id, updateData);

      if (updatedSubcategory) {
        res.json(updatedSubcategory);
      } else {
        res.status(404).json({ message: "Subcategoría no encontrada" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error al actualizar la subcategoría" });
    }
  }

  static async deleteSubcategory(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const deleted = await subcategoryService.deleteSubcategory(id);

      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Subcategoría no encontrada" });
      }
    } catch (err) {
      res.status(500).json({ message: "Error al eliminar la subcategoría" });
    }
  }
}
