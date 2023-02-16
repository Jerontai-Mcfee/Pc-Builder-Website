const { Schema, model } = require('mongoose');

const gpuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
});

const GPU = model ('GPU', gpuSchema);

module.exports = GPU;