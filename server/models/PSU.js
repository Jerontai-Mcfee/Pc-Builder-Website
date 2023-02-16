const { Schema, model } = require('mongoose');

const psuSchema = new Schema({
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
    EffcienyRating: {
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

const PSU = model ('PSU', psuSchema);

module.exports = PSU;