import { Categoria } from "../models/Categoria"; 
import pool from "../database/config";
import { ILike } from "typeorm";

export class CategoriaService {
  private categoriaRepository = pool.getRepository(Categoria);

  async createCategoria(categoriaData: Partial<Categoria>): Promise<Categoria> {
    const categoria = this.categoriaRepository.create(categoriaData);
    return await this.categoriaRepository.save(categoria);
  }

  async getAllCategorias(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }

  async getCategoriasByFilter(filter: string): Promise<Categoria[]> {
    return await this.categoriaRepository.find({
      where: {
        nombre: ILike(`%${filter}%`),
      },
    });
  }

  async updateCategoria(id: string, updateData: Partial<Categoria>): Promise<Categoria | null> {
    const categoria = await this.categoriaRepository.findOne({ where: { id } });

    if (!categoria) {
      return null;
    }

    const updatedCategoria = this.categoriaRepository.merge(categoria, updateData);
    return await this.categoriaRepository.save(updatedCategoria);
  }

  async deleteCategoria(id: string): Promise<boolean> {
    const result = await this.categoriaRepository.delete(id);
    return result.affected !== 0;
  }
}
