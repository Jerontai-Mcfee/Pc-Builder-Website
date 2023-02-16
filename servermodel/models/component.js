import mongoose from 'mongoose'

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

const cpucoolersSchema = new mongoose.Schema({
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

const gpuSchema = new mongoose.Schema({
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
    img: {
        type: String,
        required: true
    },
});

const motherboardSchema = new mongoose.Schema({
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
    chipset: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
});

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

const ramSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    speed: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
});

const storageSchema = new mongoose.Schema({
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

export default mongoose.model('Component', casesSchema, cpuSchema, cpucoolersSchema, gpuSchema, motherboardSchema, psuSchema, ramSchema, storageSchema);