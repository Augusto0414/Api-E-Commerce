import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Subcategoria } from "./Subcategoria";
import { Producto } from "./Producto";

@Entity({ name: "Categoria" })
export class Categoria {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100 })
  nombre: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @CreateDateColumn({ type: "timestamp" })
  fechaCreacion: Date;

  @UpdateDateColumn({ type: "timestamp" })
  fechaModificacion: Date;

  @OneToMany(() => Subcategoria, (subcategoria) => subcategoria.categoria)
  subcategorias: Subcategoria[];

  @OneToMany(() => Producto, (producto) => producto.categoria)
  productos: Producto[];
}
