import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Inventario } from "./Inventario";
import { ShippingLogistic } from "./ShippingLogistic";

@Entity({ name: "Bodega" })
export class Bodega {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100 })
  nombre: string;

  @Column({ type: "varchar", length: 255 })
  ubicacion: string;

  @Column({ type: "int" })
  capacidad: number;

  @CreateDateColumn({ type: "timestamp" })
  fechaCreacion: Date;

  @UpdateDateColumn({ type: "timestamp" })
  fechaModificacion: Date;

  @OneToMany(() => Inventario, (inventory) => inventory.bodega)
  inventario: Inventario[];

  @OneToMany(() => ShippingLogistic, (logistic) => logistic.bodega)
  logistica: ShippingLogistic[];
}
