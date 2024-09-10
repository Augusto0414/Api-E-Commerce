import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Pedido } from "./Pedido";
import { Producto } from "./Producto";

@Entity({ name: "DetallePedido" })
export class DetallePedido {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Pedido, (pedido) => pedido.detalles)
  pedido: Pedido;

  @ManyToOne(() => Producto, (producto) => producto)
  producto: Producto;

  @Column({ type: "int" })
  cantidad: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  precioUnitario: number;

  @CreateDateColumn({ type: "timestamp" })
  fechaCreacion: Date;
}
