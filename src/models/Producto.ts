import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Categoria } from "./Categoria";
import { Subcategoria } from "./Subcategoria";

@Entity({ name: "Producto" })
export class Producto {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100 })
  nombre: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  precio: number;

  @ManyToOne(() => Categoria, (category) => category.productos)
  categoria: Categoria;

  @ManyToOne(() => Subcategoria, (subcategory) => subcategory.productos, {
    nullable: true,
  })
  subcategoria: Subcategoria;

  @Column({ type: "boolean", default: true })
  esActivo: boolean;

  @CreateDateColumn({ type: "timestamp" })
  fechaCreacion: Date;

  @UpdateDateColumn({ type: "timestamp" })
  fechaModificacion: Date;
}
