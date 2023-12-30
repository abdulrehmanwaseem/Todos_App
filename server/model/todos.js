import mongoose from "mongoose";
const { Schema, model } = mongoose;

const todosSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title Is Required"],
    unique: true,
    trim: true,
  },
  description: { type: String, required: [true, "Description Is Required"] },
  date: {
    type: Date,
    default: Date.now,
    required: [true, "Date Is Required"],
  },
  status: {
    type: String,
    default: "Pending",
  },
});

const Todos = model("Todos", todosSchema);
export default Todos;
