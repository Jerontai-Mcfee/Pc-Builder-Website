import mongoose from 'mongoose'

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

export default mongoose.model('ShoppedComponent', shoppedComponentSchema);