import pool from "../database/config";
import { Usuario } from "../models/Usuario";

export class ClienteService {
  private clienteRepository = pool.getRepository(Usuario);

  async getAllClientes(): Promise<Usuario[]> {
    return await this.clienteRepository.find();
  }
}
