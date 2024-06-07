import mongoose from 'mongoose';

let isConnected = false; // Global variable to track connection status

export async function connect() {
    if (isConnected) {
        console.log('Using existing database connection');
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        
    } catch (error) {
        
    }
}
