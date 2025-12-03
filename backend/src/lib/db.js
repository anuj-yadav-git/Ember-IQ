import mongoose from "mongoose"
import {ENV} from "./env.js"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("Database connected successfully:", conn.connection.host)
    } catch (error) {
        console.log("Error connecting to database:",error)
        process.exit(1)//0 means successful, 1 means failure
         //This means:
        // 👉 If MongoDB connection fails, the server should not continue running.
       // 👉 Running a backend without a database connection is useless or harmful.
    }
}