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
exports.Payment = void 0;
const typeorm_1 = require("typeorm");
const Pedido_1 = require("./Pedido");
const PaymentMethod_1 = require("./PaymentMethod");
let Payment = class Payment {
};
exports.Payment = Payment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Payment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Pedido_1.Pedido, (order) => order.pagos),
    __metadata("design:type", Pedido_1.Pedido)
], Payment.prototype, "pedido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PaymentMethod_1.PaymentMethod, { eager: true }),
    __metadata("design:type", PaymentMethod_1.PaymentMethod)
], Payment.prototype, "metodoPago", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Payment.prototype, "monto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 50,
        default: "pendiente",
    }),
    __metadata("design:type", String)
], Payment.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Payment.prototype, "fechaCreacion", void 0);
exports.Payment = Payment = __decorate([
    (0, typeorm_1.Entity)({ name: "payments" })
], Payment);
