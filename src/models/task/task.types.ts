import { Document, Types } from "mongoose";

export interface ITask {
  user_id: Types.ObjectId;
  title: string;
  description: string;
  due_date: Date;
  priority: "low" | "medium" | "high";
  is_completed: boolean;
  deleted_at: Date | null;
}

export type TaskDocument = ITask & Document;
