const { Schema, model } = require('mongoose');

const casesSchema = new Schema ({
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

const Cases = model ('Cases', casesSchema);

module.exports = Cases;