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
exports.BodegaService = void 0;
const typeorm_1 = require("typeorm");
const config_1 = __importDefault(require("../database/config"));
const index_1 = require("../models/index");
class BodegaService {
    constructor() {
        this.bodegasRepository = config_1.default.getRepository(index_1.Bodega);
    }
    getAllBodegas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bodegasRepository.find();
        });
    }
    createBodega(dataBodega) {
        return __awaiter(this, void 0, void 0, function* () {
            const bodega = this.bodegasRepository.create(dataBodega);
            return yield this.bodegasRepository.save(bodega);
        });
    }
    deleteBodega(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.bodegasRepository.delete({ id });
            return result.affected !== 0;
        });
    }
    getFilterBodega(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.bodegasRepository.find({
                where: {
                    nombre: (0, typeorm_1.ILike)(`%${filter}%`),
                },
            });
        });
    }
}
exports.BodegaService = BodegaService;
