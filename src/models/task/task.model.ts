import mongoose from "mongoose";
import { TaskSchema } from "./task.schema";
import { TaskDocument } from "./task.types";

export const TaskModel =
  mongoose.models.Task || mongoose.model<TaskDocument>("Task", TaskSchema);
