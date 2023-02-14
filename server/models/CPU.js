const { Schema, model } = require('mongoose');
const { number } = require('yargs');

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
        type: number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})