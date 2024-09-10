import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Bodega } from "./Bodega";
import { Producto } from "./Producto";

@Entity({ name: "Inventario" })
export class Inventario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Bodega, (bodega) => bodega.inventario)
  bodega: Bodega;

  @ManyToOne(() => Producto, (product) => product)
  producto: Producto;

  @Column({ type: "int" })
  cantidad: number;

  @CreateDateColumn({ type: "timestamp" })
  fechaActualizacion: Date;
}
