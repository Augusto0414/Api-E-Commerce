import { Request, Response } from "express";
import { ClienteService } from "../services/cliente.service";

const clienteService = new ClienteService();

export class ClienteController {
  static async getAllClientes(req: Request, res: Response): Promise<Response> {
    try {
      const clientes = await clienteService.getAllClientes();
      return res.json(clientes);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}
