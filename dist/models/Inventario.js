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
exports.Inventario = void 0;
const typeorm_1 = require("typeorm");
const Bodega_1 = require("./Bodega");
const Producto_1 = require("./Producto");
let Inventario = class Inventario {
};
exports.Inventario = Inventario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Inventario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Bodega_1.Bodega, (bodega) => bodega.inventario),
    __metadata("design:type", Bodega_1.Bodega)
], Inventario.prototype, "bodega", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Producto_1.Producto, (product) => product),
    __metadata("design:type", Producto_1.Producto)
], Inventario.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Inventario.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Inventario.prototype, "fechaActualizacion", void 0);
exports.Inventario = Inventario = __decorate([
    (0, typeorm_1.Entity)({ name: "Inventario" })
], Inventario);
