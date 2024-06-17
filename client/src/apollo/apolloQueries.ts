import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      platform
    }
  }
`;

export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      _id
      name
      verified
      book {
        title
      }
    }
  }
`;
