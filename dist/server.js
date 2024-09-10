"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./database/config"));
(() => {
    config_1.default
        .initialize()
        .then(() => console.log("Pool initialized"))
        .catch((error) => console.error("Error al inicializar la conexión:", error));
    app_1.default.listen(app_1.default.get("port"), () => {
        console.log(`Server is running on port ${app_1.default.get("port")}`);
    });
})();
