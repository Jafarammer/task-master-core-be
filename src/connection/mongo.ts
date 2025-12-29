import mongoose from "mongoose";
import { TMongoConnectionOptions } from "../types/mongo.type";

export const connectMongo = async ({
  uri,
  dbName,
  debug = false,
}: TMongoConnectionOptions): Promise<void> => {
  if (!uri) {
    throw new Error("MongoDB connection URI is required");
  }

  if (mongoose.connection.readyState === 1) return;

  mongoose.set("debug", debug);
  mongoose.set("strictQuery", true);

  const connectionUri = dbName ? `${uri}/${dbName}` : uri;

  await mongoose.connect(connectionUri);

  console.info("✅ MongoDB connected");
};
