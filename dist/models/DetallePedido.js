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
exports.DetallePedido = void 0;
const typeorm_1 = require("typeorm");
const Pedido_1 = require("./Pedido");
const Producto_1 = require("./Producto");
let DetallePedido = class DetallePedido {
};
exports.DetallePedido = DetallePedido;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], DetallePedido.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Pedido_1.Pedido, (pedido) => pedido.detalles),
    __metadata("design:type", Pedido_1.Pedido)
], DetallePedido.prototype, "pedido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Producto_1.Producto, (producto) => producto),
    __metadata("design:type", Producto_1.Producto)
], DetallePedido.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", Number)
], DetallePedido.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], DetallePedido.prototype, "precioUnitario", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], DetallePedido.prototype, "fechaCreacion", void 0);
exports.DetallePedido = DetallePedido = __decorate([
    (0, typeorm_1.Entity)({ name: "DetallePedido" })
], DetallePedido);
