import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🔥 MongoDB conectado");
  } catch (error) {
    console.log("❌ Error conectando a MongoDB:", error);
  }
};

conectarDB();
