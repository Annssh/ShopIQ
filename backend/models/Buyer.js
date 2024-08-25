import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

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
    }],
    refreshToken: {
        type: String
    }
},
    { timestamps: true }
)

// Before saving password just hash it
buyerSchema.pre("save", async function (next) {
    if (!this.isModified("password"))
        return next();
    this.password = bcrypt.hash(this.password, 10);
    next();
})

// compare passwore using bcrypt utility
buyerSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

// cookies-token generator
buyerSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        // create a payload
        {
            _id: this._id,
            name: this.name,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

buyerSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const Buyer = mongoose.model('Buyer', buyerSchema)