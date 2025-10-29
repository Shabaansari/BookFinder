import React from "react";

const SearchBar = ({ query, setQuery, handleSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="border p-2 w-2/3 rounded-l-lg outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
