import Server from "./server/server.js"; //  Revisa que la carpeta se llame 'server' y no 'sever'

import colors from 'colors';

import dotenv from 'dotenv';

dotenv.config();

const server = new Server();

server.listen();