const mongoose = require('mongoose');

const shoppedComponentSchema = new mongoose.Schema({
    componentId: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('ShoppedComponent', shoppedComponentSchema);