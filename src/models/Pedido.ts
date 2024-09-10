import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Usuario } from "./Usuario";
import { DetallePedido } from "./DetallePedido";
import { Payment } from "./Payment";
import { ShippingLogistic } from "./ShippingLogistic";

@Entity({ name: "Pedido" })
export class Pedido {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Usuario, (user) => user)
  usuario: Usuario;

  @Column({
    type: "varchar",
    length: 50,
    default: "pendiente",
  })
  estado: "pendiente" | "procesando" | "enviado" | "entregado" | "cancelado";

  @Column({ type: "varchar", length: 255 })
  direccionEnvio: string;

  @CreateDateColumn({ type: "timestamp" })
  fechaCreacion: Date;

  @UpdateDateColumn({ type: "timestamp" })
  fechaModificacion: Date;

  @OneToMany(() => DetallePedido, (detail) => detail.pedido)
  detalles: DetallePedido[];

  @OneToMany(() => Payment, (payment) => payment.pedido)
  pagos: Payment[];

  @OneToMany(() => ShippingLogistic, (logistic) => logistic.pedido)
  logistica: ShippingLogistic[];
}
