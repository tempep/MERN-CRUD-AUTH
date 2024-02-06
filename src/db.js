import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/mern-crud-auth');
        console.log('>>> DB is connected');
    } catch (error) {
        console.error(error);
    }
};