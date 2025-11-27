import Server from "./server/server.js";
import "./db/cnn_mongodb.js"; // <-- IMPORTANTE

const server = new Server();
server.listen();
