import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> | undefined => {
  const token = req.header("Authorization")?.replace("Bearer", "");

  if (!token) {
    return res.status(401).json({ message: "No se proporciono un token de autenticacion." });
  }

  try {
    const decoded: string | JwtPayload = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ message: "Token de autenticacion invalido." });
  }
};
