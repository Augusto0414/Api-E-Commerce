import { BodegaService } from "../services";
import { Request, Response } from "express";

const bodegasService = new BodegaService();
export class BodegaController {
  static async createBodega(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.body); // Verifica qué datos están llegando
      const dataBodega = req.body;
      const newBodega = await bodegasService.createBodega(dataBodega);
      res.status(201).json(newBodega);
    } catch (error) {
      res.status(500).json({ message: "Error al crear la bodega", error });
    }
  }

  static async getAllBodegas(req: Request, res: Response): Promise<void> {
    try {
      const bodegas = await bodegasService.getAllBodegas();
      res.json(bodegas);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las bodegas", error });
    }
  }

  static async deleteBodega(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deleted = await bodegasService.deleteBodega(id);
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "Bodega no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar la bodega", error });
    }
  }
  static async filterBodega(req: Request, res: Response): Promise<void> {
    try {
      const filter = req.query.filter as string;
      if (!filter) {
        res.status(400).json({ message: "El filtro es requerido" });
        return;
      }
      const bodegas = await bodegasService.getFilterBodega(filter);
      res.json(bodegas);
    } catch (error) {
      res.status(500).json({ message: "Error al filtrar las bodegas", error });
    }
  }
  static async updateBodega(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const dataBodega = req.body;
      const updatedBodega = await bodegasService.updateBodega(id, dataBodega);
      res.json(updatedBodega);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar la bodega", error });
    }
  }
}
