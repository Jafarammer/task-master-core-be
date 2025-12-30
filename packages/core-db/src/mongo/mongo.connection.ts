import mongoose from "mongoose";
import { MongoConnectOptions } from "./mongo.types";

export const connectMongo = async ({
  uri,
  dbName,
}: MongoConnectOptions): Promise<void> => {
  if (!uri) {
    throw new Error("MongoDB connection URI is required");
  }

  if (mongoose.connection.readyState === 1) return;

  const connectionUri = dbName ? `${uri}/${dbName}` : uri;

  try {
    await mongoose.connect(connectionUri);
    console.info("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed", err);
    throw err;
  }
};
