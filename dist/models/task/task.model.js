"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const task_schema_1 = require("./task.schema");
exports.TaskModel = mongoose_1.default.models.Task || mongoose_1.default.model("Task", task_schema_1.TaskSchema);
