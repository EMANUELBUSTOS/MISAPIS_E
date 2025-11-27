import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    artista: { type: String, required: true },
    genero: { type: String },
    portada: { type: String },  // URL imagen
    audio: { type: String },    // URL archivo mp3
}, {
    timestamps: true
});

export default mongoose.model("Music", MusicSchema);
