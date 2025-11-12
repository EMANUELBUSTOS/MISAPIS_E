import mongoose from 'mongoose';

let isConected = false;

const conectarMongoDB = async () => {
    if (isConected) {
        console.log("Ya esta conectada la base de datos".yellow);
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConected = true;
        console.log('Conectado a la BD'.white);
    } catch (error) {
        console.log("Error al conectar a la BD".blue);
    }
}

const db = mongoose.connection;

db.on('error', (error) => {
    isConected = false;
    console.log('Error al conectar a MongoDB'.blue);
});

db.once('open', () => {
    isConected = true;
});

db.on('disconnected', () => {
    isConected = false;
    console.log('Desconectado de MongoDB'.black);
});

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB se ha desconectado'.red);
    process.exit(0);
});

export { conectarMongoDB, isConected };

