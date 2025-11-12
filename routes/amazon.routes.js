import { Router } from "express";
import {

    getAllDatos,
    getDatamazonById,
    postAmazon,
    putAmazon,
    deleteAmazon,    

} from '../controllers/amazon.controller.js';
import Amazon from "../models/amazon.model.js";

const datamazon = Router();

datamazon.get('/', getAllDatos);

datamazon.get('/:id', getDatamazonById);

datamazon.put('/:id', putAmazon);

datamazon.post('/', postAmazon);

datamazon.delete('/:id', deleteAmazon);

export default datamazon;