import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Bodega } from "./Bodega";
import { Pedido } from "./";

@Entity({ name: "shipping_logistics" })
export class ShippingLogistic {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Pedido, (order) => order.logistica)
  pedido: Pedido;

  @ManyToOne(() => Bodega, (warehouse) => warehouse.logistica)
  bodega: Bodega;

  @Column({ type: "varchar", length: 100 })
  estado: "pendiente" | "en_proceso" | "en_transito" | "entregado" | "cancelado";

  @Column({ type: "timestamp", nullable: true })
  fechaEnvio: Date;

  @Column({ type: "timestamp", nullable: true })
  fechaEntrega: Date;

  @CreateDateColumn({ type: "timestamp" })
  fechaCreacion: Date;

  @UpdateDateColumn({ type: "timestamp" })
  fechaModificacion: Date;
}
