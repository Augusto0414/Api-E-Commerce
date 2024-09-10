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
exports.Bodega = void 0;
const typeorm_1 = require("typeorm");
const Inventario_1 = require("./Inventario");
const ShippingLogistic_1 = require("./ShippingLogistic");
let Bodega = class Bodega {
};
exports.Bodega = Bodega;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Bodega.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], Bodega.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Bodega.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], Bodega.prototype, "capacidad", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Bodega.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Bodega.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Inventario_1.Inventario, (inventory) => inventory.bodega),
    __metadata("design:type", Array)
], Bodega.prototype, "inventario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ShippingLogistic_1.ShippingLogistic, (logistic) => logistic.bodega),
    __metadata("design:type", Array)
], Bodega.prototype, "logistica", void 0);
exports.Bodega = Bodega = __decorate([
    (0, typeorm_1.Entity)({ name: "Bodega" })
], Bodega);
