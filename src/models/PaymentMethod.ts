import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Payment } from "./Payment";

@Entity({ name: "payment_methods" })
export class PaymentMethod {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 50 })
  nombre: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @CreateDateColumn({ type: "timestamp" })
  fechaCreacion: Date;

  @UpdateDateColumn({ type: "timestamp" })
  fechaModificacion: Date;

  @OneToMany(() => Payment, (payment) => payment.metodoPago)
  pagos: Payment[];
}
