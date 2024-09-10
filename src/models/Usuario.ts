import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "Usuario" })
export class Usuario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100 })
  nombre: string;

  @Column({ type: "varchar", length: 100, unique: true })
  correoElectronico: string;

  @Column({ type: "varchar", length: 255 })
  contraseña: string;

  @Column({ type: "varchar", length: 50 })
  rol: "admin" | "cliente" | "gestor_bodega" | "repartidor";

  @Column({ type: "varchar", length: 255, nullable: true })
  direccion: string;

  @Column({ type: "varchar", length: 20, nullable: true })
  telefono: string;

  @CreateDateColumn({ type: "timestamp" })
  fechaCreacion: Date;

  @UpdateDateColumn({ type: "timestamp" })
  fechaModificacion: Date;
}
