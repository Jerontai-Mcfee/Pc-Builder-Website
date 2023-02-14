const { Schema, model } = require('mongoose');

const motherboardSchema = new Schema({
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
    chipset: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
});

const Motherboard = model ('Motherboard', motherboardSchema);

module.exports = Motherboard;