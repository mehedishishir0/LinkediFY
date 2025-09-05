import mongoose, { Connection } from 'mongoose'

let isConnected: Connection | boolean = false;

const connectDb = async () => {
    if (isConnected) {
        console.log('MongoDB is already connected')
        return isConnected
    }
    try {
        const res = await mongoose.connect(process.env.MONGO_URL as string)
        isConnected = res.connection
        console.log('Connected to MongoDB')
        return isConnected
    } catch (error) {
        console.log('Error connecting to MongoDB', error)
        process.exit(1)
    }
}

export default connectDb