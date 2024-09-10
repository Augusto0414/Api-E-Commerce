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
exports.Categoria = void 0;
const typeorm_1 = require("typeorm");
const Subcategoria_1 = require("./Subcategoria");
const Producto_1 = require("./Producto");
let Categoria = class Categoria {
};
exports.Categoria = Categoria;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Categoria.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Categoria.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Categoria.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Categoria.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Categoria.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Subcategoria_1.Subcategoria, (subcategoria) => subcategoria.categoria),
    __metadata("design:type", Array)
], Categoria.prototype, "subcategorias", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Producto_1.Producto, (producto) => producto.categoria),
    __metadata("design:type", Array)
], Categoria.prototype, "productos", void 0);
exports.Categoria = Categoria = __decorate([
    (0, typeorm_1.Entity)({ name: "Categoria" })
], Categoria);
