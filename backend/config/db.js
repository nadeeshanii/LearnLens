import mongoose from "mongoose";

const connectDB = async () => {

    try {

        // Connection options help with DNS/SSL and are compatible with mongoose v9
        await mongoose.connect(process.env.MONGODB_URI, {
            // useNewUrlParser/useUnifiedTopology removed in mongoose v6+
            autoIndex: false,
            serverSelectionTimeoutMS: 15000,
            socketTimeoutMS: 45000,
        });

        console.log("MongoDB Connected Successfully ✅");

    } catch (error) {

        console.log("MongoDB Connection Failed ❌");
        console.log(error.message);

        process.exit(1);
    }

};


export default connectDB;