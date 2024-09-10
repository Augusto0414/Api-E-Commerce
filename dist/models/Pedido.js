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
exports.Pedido = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = require("./Usuario");
const DetallePedido_1 = require("./DetallePedido");
const Payment_1 = require("./Payment");
const ShippingLogistic_1 = require("./ShippingLogistic");
let Pedido = class Pedido {
};
exports.Pedido = Pedido;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Pedido.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Usuario_1.Usuario, (user) => user),
    __metadata("design:type", Usuario_1.Usuario)
], Pedido.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 50,
        default: "pendiente",
    }),
    __metadata("design:type", String)
], Pedido.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Pedido.prototype, "direccionEnvio", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Pedido.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Pedido.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DetallePedido_1.DetallePedido, (detail) => detail.pedido),
    __metadata("design:type", Array)
], Pedido.prototype, "detalles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Payment_1.Payment, (payment) => payment.pedido),
    __metadata("design:type", Array)
], Pedido.prototype, "pagos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ShippingLogistic_1.ShippingLogistic, (logistic) => logistic.pedido),
    __metadata("design:type", Array)
], Pedido.prototype, "logistica", void 0);
exports.Pedido = Pedido = __decorate([
    (0, typeorm_1.Entity)({ name: "Pedido" })
], Pedido);
