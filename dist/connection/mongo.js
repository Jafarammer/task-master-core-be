"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongo = async ({ uri, dbName, }) => {
    if (!uri) {
        throw new Error("MongoDB connection URI is required");
    }
    if (mongoose_1.default.connection.readyState === 1)
        return;
    const connectionUri = dbName ? `${uri}/${dbName}` : uri;
    try {
        await mongoose_1.default.connect(connectionUri);
        console.info("✅ MongoDB connected");
    }
    catch (err) {
        console.error("❌ MongoDB connection failed", err);
        throw err;
    }
};
exports.connectMongo = connectMongo;
