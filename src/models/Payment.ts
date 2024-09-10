import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm";
import { Pedido } from "./Pedido";
import { PaymentMethod } from "./PaymentMethod";

@Entity({ name: "payments" })
export class Payment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Pedido, (order) => order.pagos)
  pedido: Pedido;

  @ManyToOne(() => PaymentMethod, { eager: true })
  metodoPago: PaymentMethod;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  monto: number;

  @Column({
    type: "varchar",
    length: 50,
    default: "pendiente",
  })
  estado: "pendiente" | "completado" | "fallido" | "reembolsado";

  @CreateDateColumn({ type: "timestamp" })
  fechaCreacion: Date;
}
