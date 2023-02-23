const mongoose = require('mongoose');

const motherboardSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Component', motherboardSchema);