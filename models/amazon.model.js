import mongoose from "mongoose";

const amazonSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    edad:{
        type: Number,
        required: false
    },
    contacto:{
        type: [String],
        required: false
    }
});

const Amazon = mongoose.model('Amazon', amazonSchema);

export default Amazon;