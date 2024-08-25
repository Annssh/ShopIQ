import mongoose from "mongoose";

const buyerSchema = new mongoose.Schema({
    name: {
        type: string,
        trim: true,
        required: true
    },
    email: {
        type: string,
        trim: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    profileImage: String,
    address: [{
        _id: false,
        addressTag: {
            type: String,
            enum: ['Home', 'Work', 'Hotel', 'Other'],
            default: 'Home'
        },
        addressLine1: String,
        addressLine2: String,
        city: String,
        state: String,
        pincode: String,
        landmark: String,
        customerName: String,
        customerPhone: String
    }]
},
    { timestamps: true }
)

export const Buyer = mongoose.model('Buyer', buyerSchema)