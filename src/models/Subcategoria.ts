import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Categoria } from "./Categoria";
import { Producto } from "./Producto";

@Entity({ name: "Subcategories" })
export class Subcategoria {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 100 })
  nombre: string;

  @Column({ type: "text", nullable: true })
  descripcion: string;

  @ManyToOne(() => Categoria, (category) => category.subcategorias, {
    onDelete: "CASCADE",
  })
  categoria: Categoria;

  @OneToMany(() => Producto, (product) => product.subcategoria)
  productos: Producto[];

  @CreateDateColumn({ type: "timestamp" })
  fechaCreacion: Date;

  @UpdateDateColumn({ type: "timestamp" })
  fechaModificacion: Date;
}
