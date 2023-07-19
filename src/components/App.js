import React from "react";
import MovieCard from "./MovieCard";

function App() {
  const movie = {
    title: "Mad Max",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM",
    genres: ["Action", "Adventure", "Science Fiction", "Thriller"]
  };

  return (
    <div className="App">
      <MovieCard {...movie} />
    </div>
  );
}

export default App;
