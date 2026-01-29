import styled from "styled-components";
import { useOmdbSearch } from "./hooks/useOmdbSearch";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Carousel from "./components/Carousel/Carousel";
import { ClearButton } from "./components/Carousel/Carousel.styles";
import MovieCard from "./components/MovieCard/MovieCard";
import StatusMessage from "./components/StatusMessage/StatusMessage";
import type { Movie } from "./types/omdb";

const Page = styled.main`
  padding: 80px 24px 0;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const QUERIES = ["batman", "superman", "spider"];

function App() {
  const { movies, isLoading } = useOmdbSearch(QUERIES);
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
      <Carousel title="Available Movies">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={isFavorite(movie)}
            onToggleFavorite={() => toggleFavorite(movie)}
          />
        ))}
      </Carousel>

      {favorites.length > 0 && (
        <Carousel
          title="Favorites"
          headerRight={
            <ClearButton onClick={clearFavorites}>Clear</ClearButton>
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
    </Page>
  );
}

export default App;
