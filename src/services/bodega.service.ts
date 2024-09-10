import { ILike } from "typeorm";
import pool from "../database/config";
import { Bodega } from "../models/index";
export class BodegaService {
  private bodegasRepository = pool.getRepository(Bodega);

  async getAllBodegas(): Promise<Bodega[]> {
    return await this.bodegasRepository.find();
  }
  async createBodega(dataBodega: Partial<Bodega>): Promise<Bodega> {
    const bodega = this.bodegasRepository.create(dataBodega);
    return await this.bodegasRepository.save(bodega);
  }
  async deleteBodega(id: string): Promise<boolean> {
    const result = await this.bodegasRepository.delete({ id });
    return result.affected !== 0;
  }
  async getFilterBodega(filter: string): Promise<Bodega[]> {
    return await this.bodegasRepository.find({
      where: {
        nombre: ILike(`%${filter}%`),
      },
    });
  }
}
