"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const producto_controller_1 = require("../controller/producto.controller");
const authMiddleware_1 = require("../middleware/authMiddleware");
const route = (0, express_1.default)();
route.get("/products", authMiddleware_1.authenticateToken, producto_controller_1.getProduct);
route.delete("/products:id", authMiddleware_1.authenticateToken, producto_controller_1.getProduct);
route.post("/products", authMiddleware_1.authenticateToken, producto_controller_1.getProduct);
exports.default = route;
