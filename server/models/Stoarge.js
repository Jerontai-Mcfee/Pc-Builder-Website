const { Schema, model } = require('mongoose');

const storageSchema = new Schema({
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
    Capacity: {
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

const Storage = model ('Storage', storageSchema);

module.exports = Storage;