import { ILike } from "typeorm";
import pool from "../database/config";
import { Producto } from "../models/Producto";

export class ProductoService {
  private productoRepository = pool.getRepository(Producto);
  async getAllProducto(): Promise<Producto[]> {
    return await this.productoRepository.find({
      relations: ["categoria", "subcategoria"],
    });
  }

  async createProducto(producto: Partial<Producto>): Promise<Producto> {
    const newProducto = this.productoRepository.create(producto);
    return await this.productoRepository.save(newProducto);
  }

  async deleteProducto(id: string): Promise<boolean> {
    const deleteProduct = await this.productoRepository.delete(id);
    return deleteProduct.affected !== 0;
  }

  async updateProdcuto(id: string, producto: Partial<Producto>): Promise<Producto> {
    const updateProdut = await this.productoRepository.findOne({ where: { id } });
    if (!updateProdut) {
      throw new Error("No se encontro este producto para hacer el update");
    }
    const dataUpdate = this.productoRepository.merge({ ...updateProdut, ...producto });
    return await this.productoRepository.save(dataUpdate);
  }

  async getFilterProductos(filter: string): Promise<Producto[]> {
    return await this.productoRepository.find({
      where: {
        nombre: ILike(`%${filter}%`),
      },
      relations: ["categoria", "subcategoria"],
    });
  }
}
