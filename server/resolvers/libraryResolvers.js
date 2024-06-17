import { Author, Book } from "../models/libraryModels.js";
import { GraphQLError } from "graphql";

export const resolvers = {
  Query: {
    authors: async () => {
      const authors = await Author.find({});
      return authors;
    },
    books: async () => {
      const books = await Book.find({});
      return books;
    },
    author: async (_, args) => {
      const author = await Author.findById(args.id);

      // error handling
      if (!author)
        throw new GraphQLError("there is no author with this id", {
          extensions: { code: 404, status: "fail" },
        });

      return author;
    },
    book: async (_, args) => {
      const book = await Book.findById(args.id);

      // error handling
      if (!book)
        throw new GraphQLError("there is no book with this id", {
          extensions: { code: 404, status: "fail" },
        });

      return book;
    },
  },
  Author: {
    book: async (parent) => {
      const authorBook = await Book.find({ authorId: parent._id });
      if (!authorBook)
        throw new GraphQLError(message, {
          extensions: { code: "YOUR_ERROR_CODE", myCustomExtensions },
        });

      return authorBook;
    },
  },
  Book: {
    author: async (parent) => {
      const bookAuthor = await Author.findOne({ _id: parent.authorId });
      return bookAuthor;
    },
  },
};
