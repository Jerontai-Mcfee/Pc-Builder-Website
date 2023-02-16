const { Schema, model } = require('mongoose');

const cpuSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
});

const CPU = model ('CPU', cpuSchema);

module.exports = CPU;