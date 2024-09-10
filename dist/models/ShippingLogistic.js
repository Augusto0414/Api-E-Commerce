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
exports.ShippingLogistic = void 0;
const typeorm_1 = require("typeorm");
const Bodega_1 = require("./Bodega");
const _1 = require("./");
let ShippingLogistic = class ShippingLogistic {
};
exports.ShippingLogistic = ShippingLogistic;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ShippingLogistic.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Pedido, (order) => order.logistica),
    __metadata("design:type", _1.Pedido)
], ShippingLogistic.prototype, "pedido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Bodega_1.Bodega, (warehouse) => warehouse.logistica),
    __metadata("design:type", Bodega_1.Bodega)
], ShippingLogistic.prototype, "bodega", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 100 }),
    __metadata("design:type", String)
], ShippingLogistic.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], ShippingLogistic.prototype, "fechaEnvio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp", nullable: true }),
    __metadata("design:type", Date)
], ShippingLogistic.prototype, "fechaEntrega", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], ShippingLogistic.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], ShippingLogistic.prototype, "fechaModificacion", void 0);
exports.ShippingLogistic = ShippingLogistic = __decorate([
    (0, typeorm_1.Entity)({ name: "shipping_logistics" })
], ShippingLogistic);
