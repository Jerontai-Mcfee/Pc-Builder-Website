const { Schema, model } = require('mongoose');

const cpucoolersSchema = new Schema({
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
    type: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
});

const Cpucoolers = model ('Cpucoolers', cpucoolersSchema);

module.exports = Cpucoolers;