import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  platform: {
    type: [String],
    required: true,
  },
  authorId: {
    type: String,
    required: true,
  },
});

const authorSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

export const Book = mongoose.model("Book", bookSchema);
export const Author = mongoose.model("Author", authorSchema);
