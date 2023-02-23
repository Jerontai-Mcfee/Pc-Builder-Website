const mongoose = require('mongoose');

const cpuSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Cpu', cpuSchema);