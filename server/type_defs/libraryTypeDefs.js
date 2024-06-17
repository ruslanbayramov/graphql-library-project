export const typeDefs = `#graphql
  type Author {
    _id: String!
    name: String!
    verified: Boolean!
    book: [Book!]
  }
  type Book {
    _id: String!
    title: String!
    platform: [String!]!
    authorId: String!
    author: Author
  }
  type Query {
    authors: [Author]
    books: [Book]
    author(id: ID!): Author
    book(id: ID!): Book
  }
`;
