const mongoose = require('mongoose');

const casesSchema = new mongoose.Schema({
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
    tower: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Component', casesSchema);