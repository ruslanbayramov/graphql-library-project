import { useQuery } from "@apollo/client";
import { GET_AUTHORS, GET_BOOKS } from "./apollo/apolloQueries";
interface BookType {
  _id: string;
  title: string;
  platform: string[];
  authorId: string;
}
interface AuthorType {
  _id: string;
  name: string;
  verified: boolean;
  book: [BookType];
}

function App() {
  const {
    loading: loadingBooks,
    error: errorBooks,
    data: dataBooks,
  } = useQuery(GET_BOOKS);

  const {
    loading: loadingAuthors,
    error: errorAuthors,
    data: dataAuthors,
  } = useQuery(GET_AUTHORS);

  if (loadingBooks || loadingAuthors) return <div>Loading...</div>;
  if (errorBooks) return <div>Error loading books: {errorBooks.message}</div>;
  if (errorAuthors)
    return <div>Error loading authors: {errorAuthors.message}</div>;
  console.log(dataAuthors);

  return (
    <div>
      <h1>Books</h1>
      <div>
        {dataBooks.books.map((book: BookType) => (
          <div key={book.title}>
            <h3>{book.title}</h3>
            <p>{book.platform.join(", ")}</p>
            <hr />
          </div>
        ))}
      </div>

      <h1>Authors</h1>
      <div>
        {dataAuthors.authors.map((author: AuthorType) => (
          <div key={author.name}>
            <h3>{author.name}</h3>
            <p>Author books:</p>
            <ul>
              {author.book.map((book: BookType) => (
                <li>{book.title}</li>
              ))}
            </ul>
            <p>Verify status: {author.verified ? "trusted✅" : "unverified"}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
