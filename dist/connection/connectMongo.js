import mongoose from "mongoose";
export const connectMongo = async ({ uri, dbName, debug = false, }) => {
    if (!uri) {
        throw new Error("MongoDB connection URI is required");
    }
    if (mongoose.connection.readyState === 1)
        return;
    mongoose.set("debug", debug);
    mongoose.set("strictQuery", true);
    const connectionUri = dbName ? `${uri}/${dbName}` : uri;
    await mongoose.connect(connectionUri);
    console.info("✅ MongoDB connected");
};
