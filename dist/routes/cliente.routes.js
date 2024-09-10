"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_controller_1 = require("../controller/cliente.controller");
const router = (0, express_1.Router)();
router.get("/clientes", cliente_controller_1.ClienteController.getAllClientes);
exports.default = router;
