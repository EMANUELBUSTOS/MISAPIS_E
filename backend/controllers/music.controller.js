import Musica from "../models/musica.model.js";

// Obtener todas las canciones
export const obtenerMusica = async (req, res) => {
  try {
    const canciones = await Musica.find();
    res.json(canciones);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la música" });
  }
};

// Obtener música por ID
export const obtenerMusicaPorID = async (req, res) => {
  try {
    const cancion = await Musica.findById(req.params.id);
    if (!cancion) return res.status(404).json({ error: "Canción no encontrada" });
    res.json(cancion);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la canción" });
  }
};

// Crear canción
export const crearMusica = async (req, res) => {
  try {
    const nuevaCancion = new Musica(req.body);
    await nuevaCancion.save();
    res.json(nuevaCancion);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la canción" });
  }
};

// Actualizar canción
export const actualizarMusica = async (req, res) => {
  try {
    const cancionActualizada = await Musica.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(cancionActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la canción" });
  }
};

// Eliminar canción
export const eliminarMusica = async (req, res) => {
  try {
    await Musica.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Canción eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la canción" });
  }
};
