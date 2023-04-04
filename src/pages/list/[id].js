import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Detail() {
  const router = useRouter();

  const [books, setBooks] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://books-api.nomadcoders.workers.dev/list?name=${router.query.id}`
        )
      ).json();
      setBooks(results.books);
    })();
  }, []);

  return (
    <div className="container">
      {!books && <h4>Loading...</h4>}
      {books?.map((book) => (
        <div className="book" key={book.rank}>
          <img src={`${book.book_image}`} />
          <h4>{router.query.id}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
