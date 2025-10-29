import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

const Home = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks(res.data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        📚 Alex’s Book Finder
      </h1>

      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />

      {loading && <p className="text-center text-gray-500">Loading books...</p>}

      {!loading && books.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          Try searching for something like “AI”, “Harry Potter”, or “Self Help” 😊
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
