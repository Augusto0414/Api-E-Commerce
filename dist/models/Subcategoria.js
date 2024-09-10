"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subcategoria = void 0;
const typeorm_1 = require("typeorm");
const Categoria_1 = require("./Categoria");
const Producto_1 = require("./Producto");
let Subcategoria = class Subcategoria {
};
exports.Subcategoria = Subcategoria;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Subcategoria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Subcategoria.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Subcategoria.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Categoria_1.Categoria, (category) => category.subcategorias, {
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Categoria_1.Categoria)
], Subcategoria.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Producto_1.Producto, (product) => product.subcategoria),
    __metadata("design:type", Array)
], Subcategoria.prototype, "productos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Subcategoria.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Subcategoria.prototype, "fechaModificacion", void 0);
exports.Subcategoria = Subcategoria = __decorate([
    (0, typeorm_1.Entity)({ name: "Subcategories" })
], Subcategoria);
