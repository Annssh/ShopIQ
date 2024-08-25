import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)

        console.log(
            "Database connected:",
            connect.connection.host,
            connect.connection.name
        );
    } catch (error) {
        console.log(error);
        return;
    }
};

export default connectDB;