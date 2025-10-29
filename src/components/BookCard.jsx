import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-60 m-3">
      <img
        src={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "https://via.placeholder.com/128x192.png?text=No+Cover"
        }
        alt={book.volumeInfo.title}
        className="rounded-md mx-auto"
      />
      <h3 className="text-lg font-semibold mt-2 text-center">
        {book.volumeInfo.title}
      </h3>
      <p className="text-sm text-gray-600 text-center">
        {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown"}
      </p>
    </div>
  );
};

export default BookCard;
