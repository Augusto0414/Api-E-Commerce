"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_routes_1 = __importDefault(require("./cliente.routes"));
const prodcuto_routes_1 = __importDefault(require("./prodcuto.routes"));
const categoria_routes_1 = __importDefault(require("./categoria.routes"));
const subcategoria_routes_1 = __importDefault(require("./subcategoria.routes"));
const bodega_routes_1 = __importDefault(require("./bodega.routes"));
const routes = (0, express_1.Router)();
routes.use(categoria_routes_1.default);
routes.use(subcategoria_routes_1.default);
routes.use(cliente_routes_1.default);
routes.use(prodcuto_routes_1.default);
routes.use(bodega_routes_1.default);
exports.default = routes;
