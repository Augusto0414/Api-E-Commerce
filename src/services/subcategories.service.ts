import { ILike, Repository } from "typeorm";
import pool from "../database/config";
import { Subcategoria } from "../models/Subcategoria";
import { Categoria } from "../models/Categoria";

export class SubcategoriesService {
  private subcategoriesRepository = pool.getRepository(Subcategoria);
  private categoriesRepository = pool.getRepository(Categoria);

  async getAllSubcategories(): Promise<Subcategoria[]> {
    return await this.subcategoriesRepository.find({
      relations: ["categoria"],
    });
  }

  async createSubcategory(subcategoriaData: Partial<Subcategoria>): Promise<Subcategoria> {
    const subcategoria = this.subcategoriesRepository.create(subcategoriaData);
    return await this.subcategoriesRepository.save(subcategoria);
  }

  async getSubcategoriesByFilter(filter: string): Promise<Subcategoria[]> {
    return await this.subcategoriesRepository.find({
      where: {
        nombre: ILike(`%${filter}%`),
      },
      relations: ["categoria"],
    });
  }

  async updateSubcategories(id: string, updateData: Partial<Subcategoria>): Promise<Subcategoria | null> {
    const subcategoria = await this.subcategoriesRepository.findOne({
      where: { id },
      relations: ["categoria"],
    });

    if (!subcategoria) return null;

    if (updateData.nombre !== undefined) {
      subcategoria.nombre = updateData.nombre;
    }

    if (updateData.descripcion !== undefined) {
      subcategoria.descripcion = updateData.descripcion;
    }

    if (updateData.categoria !== undefined) {
      const categoria = await this.categoriesRepository.findOneBy({ id: updateData.categoria.id });
      if (categoria) {
        subcategoria.categoria = categoria;
      }
    }

    return await this.subcategoriesRepository.save(subcategoria);
  }

  async deleteSubcategory(id: string): Promise<boolean> {
    const result = await this.subcategoriesRepository.delete({ id });
    return result.affected !== 0;
  }
}
