const mongoose = require('mongoose');

const psuSchema = new mongoose.Schema({
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
    Watt: {
        type: String,
        required: true
    },
    EfficiencyRating: {
        type: String,
        required: true
    },
    Modular: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Psu', psuSchema);