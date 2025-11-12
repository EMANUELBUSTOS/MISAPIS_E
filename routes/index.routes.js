import { Router } from "express";
import amazon from "./amazon.routes.js";

const indexRoutes = Router();

indexRoutes.use('/amazon', amazon);

export default indexRoutes;
