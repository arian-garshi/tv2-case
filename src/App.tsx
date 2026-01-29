import { useState } from "react";
import styled from "styled-components";
import { useOmdbSearch } from "./hooks/useOmdbSearch";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Carousel from "./components/Carousel/Carousel";
import { ClearButton } from "./components/Carousel/Carousel.styles";
import MovieCard from "./components/MovieCard/MovieCard";
import StatusMessage from "./components/StatusMessage/StatusMessage";
import TPrinter from "./components/TPrinter";
import { FiRefreshCw, FiTrash2 } from "react-icons/fi";
import type { Movie } from "./types/omdb";

const Page = styled.main`
  padding: 80px 24px 0;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 0 0 -24px;
`;

const SEARCH_POOL = [
  "batman", "superman", "spider", "star", "iron", "captain",
  "night", "war", "dark", "fast", "mission", "world",
  "king", "love", "fire", "ocean", "race", "shadow",
];

function pickRandom(pool: string[], count: number): string[] {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function App() {
  const [queries, setQueries] = useState(() => pickRandom(SEARCH_POOL, 3));
  const { movies, isLoading } = useOmdbSearch(queries);
  const [favorites, setFavorites] = useLocalStorage<Movie[]>("favorites", []);

  const isFavorite = (movie: Movie) =>
    favorites.some((f) => f.imdbID === movie.imdbID);

  const toggleFavorite = (movie: Movie) => {
    setFavorites(
      isFavorite(movie)
        ? favorites.filter((f) => f.imdbID !== movie.imdbID)
        : [...favorites, movie],
    );
  };

  const clearFavorites = () => setFavorites([]);

  if (isLoading)
    return (
      <Page>
        <StatusMessage message="Loading movies..." />
      </Page>
    );
  if (movies.length === 0)
    return (
      <Page>
        <StatusMessage message="No movies found. Try again later." />
      </Page>
    );

  return (
    <Page>
      <Carousel
        title="Recommended Movies"
        headingLevel="h1"
        headerRight={
          <ClearButton onClick={() => setQueries(pickRandom(SEARCH_POOL, 3))}>
            <FiRefreshCw size={12} /> Refresh
          </ClearButton>
        }
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={isFavorite(movie)}
            onToggleFavorite={() => toggleFavorite(movie)}
          />
        ))}
      </Carousel>

      {favorites.length > 0 && <Divider />}
      {favorites.length > 0 && (
        <Carousel
          title="Favorites"
          headerRight={
            <ClearButton onClick={clearFavorites}>
              <FiTrash2 size={12} /> Clear
            </ClearButton>
          }
        >
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              variant="favorite"
              onToggleFavorite={() => toggleFavorite(movie)}
            />
          ))}
        </Carousel>
      )}

      <TPrinter />
    </Page>
  );
}

export default App;
