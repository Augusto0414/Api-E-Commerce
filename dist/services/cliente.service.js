"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const config_1 = __importDefault(require("../database/config"));
const Usuario_1 = require("../models/Usuario");
class ClienteService {
    constructor() {
        this.clienteRepository = config_1.default.getRepository(Usuario_1.Usuario);
    }
    getAllClientes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.clienteRepository.find();
        });
    }
}
exports.ClienteService = ClienteService;
