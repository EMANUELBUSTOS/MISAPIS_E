import { Router } from "express";
import { obtenerMusica, obtenerMusicaPorID, crearMusica, actualizarMusica, eliminarMusica } from "../controllers/music.controller.js";

const router = Router();

router.get("/", obtenerMusica);
router.get("/:id", obtenerMusicaPorID);
router.post("/", crearMusica);
router.put("/:id", actualizarMusica);
router.delete("/:id", eliminarMusica);

export default router;   // ← OBLIGATORIO
