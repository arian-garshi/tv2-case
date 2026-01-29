import { useState } from "react";
import { FiHeart, FiX } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import type { Movie } from "../../types/omdb";
import {
  Card,
  Poster,
  Placeholder,
  Title,
  IconOverlay,
  FavoriteIcon,
} from "./MovieCard.styles";

interface MovieCardProps {
  movie: Movie;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  variant?: "default" | "favorite";
}

const MovieCard = ({
  movie,
  isFavorite = false,
  onToggleFavorite,
  variant = "default",
}: MovieCardProps) => {
  const [hasError, setHasError] = useState(false);
  const hasPoster = movie.Poster && movie.Poster !== "N/A" && !hasError;

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite?.();
  };

  return (
    <Card>
      {hasPoster ? (
        <Poster
          src={movie.Poster}
          alt={movie.Title}
          onError={() => setHasError(true)}
        />
      ) : (
        <Placeholder>No poster available</Placeholder>
      )}

      {variant === "default" && isFavorite && (
        <FavoriteIcon $active>
          <FaHeart />
        </FavoriteIcon>
      )}

      {onToggleFavorite && (
        <IconOverlay onClick={handleOverlayClick} aria-label={
          variant === "favorite"
            ? "Remove from favorites"
            : isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
        }>
          {variant === "favorite" ? (
            <FiX />
          ) : isFavorite ? (
            <FaHeart style={{ color: "#e74c3c" }} />
          ) : (
            <FiHeart />
          )}
        </IconOverlay>
      )}

      <Title>{movie.Title}</Title>
    </Card>
  );
};

export default MovieCard;
