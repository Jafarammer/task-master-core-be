"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TaskSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    due_date: { type: Date, required: true },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium",
    },
    is_completed: { type: Boolean, default: false },
    deleted_at: { type: Date, default: null },
}, { timestamps: true });
