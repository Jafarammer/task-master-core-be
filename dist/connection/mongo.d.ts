import { MongoConnectOptions } from "../types/connection.type";
export declare const connectMongo: ({ uri, dbName, }: MongoConnectOptions) => Promise<void>;
