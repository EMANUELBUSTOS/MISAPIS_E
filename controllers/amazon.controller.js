import Ejemplo from "../models/amazon.model.js";
import mongoose from "mongoose";
import express from 'express';
import Amazon from "../models/amazon.model.js";

export const getAllDatos = async (req, res) => {
    console.log('Obtiene todos los datos de los usuarios de Amazon');
    try {
        const amazon = await Amazon.find({},{ __v: 0});
        if (amazon.length === 0) {
            return res.status(404).json({
                msg: 'No se encontraron los datos'
            });
        }
        return res.status(200).json({
            amazon
        });

    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener los datos de los usuarios'
        });
    }
};

export const getDatamazonById = async (req, res) => {
    console.log('Datos por id');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'Id no valido'
            });
        }
        const amazon = await Amazon.findById(id);
        if (!amazon) {
            return res.status(404).json({
                msg: 'Datos no encontrados'
            });
        }

        return res.status(200).json({
            amazon
        });

    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener los datos de Amazon'
        });
    }
}

export const postAmazon = async (req, res) => {
    console.log('Post de Datos');
    const body = req.body;
    const amazon = new Amazon(body);
    try {
        const validationError = amazon.validateSync();
        if (validationError) {
            const errorMessages = Object.values(validationError.errors).map(error => error.message);
            return res.status(400).json({
                msg: errorMessages
            });
        }

        await amazon.save();
        return res.status(201).json({
            amazon
        })

    } catch (error) {
        return res.status(500).json({
            msg: 'Error al guardar los datos'
        });
    }
}

export const putAmazon = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'Id no valido'
            });
        }

        const amazon = await Amazon.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!amazon) {
            return res.status(404).json({
                msg: 'Datos no encontrados'
            });
        }

        return res.status(200).json({
            amazon
        });

    } catch (error) {
        return res.status(500).json({
            msg: 'Error al guardar los datos'
        });
    }
}


export const deleteAmazon = async (req, res) => {
    console.log('Delete datos Usuario');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'Id no valido'
            });
        }

        const amazon = await Amazon.findByIdAndDelete(id);
        if (!amazon) {
            return res.status(404).json({
                msg: 'Datos no encontrados'
            });
        }
        return res.status(200).json({
            msg: 'Dato del usuario eliminado',
            amazon
        });

    } catch (error) {
        return res.status(500).json({
            msg: 'Error al eliminar los datos'
        });
    }
}