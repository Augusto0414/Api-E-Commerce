import { Router } from "express";
import { ClienteController } from "../controller/cliente.controller";

const router = Router();

router.get("/clientes", ClienteController.getAllClientes);

export default router;
