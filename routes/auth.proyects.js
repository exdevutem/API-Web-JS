import { Router } from "express";

export const proyectRoutes = Router();

proyectRoutes.get("/", (req, res) => {
  return res.status(200).json({
    ok: true,
    msg: "Obtener todos los proyectos",
  });
});
