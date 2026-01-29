import { useState, useEffect } from "react";
import type { Movie, MovieSearchResponse } from "../types/omdb";
import { mockMovies } from "../data/mockMovies";

const OMDB_BASE_URL = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY as string;

// pagesPerQuery controls how many pages to fetch per query. Each page has up to 10 results.
export const useOmdbSearch = (queries: string[], pagesPerQuery = 1) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(queries.length > 0);

  useEffect(() => {
    if (queries.length === 0) {
      setMovies([]);
      setIsLoading(false);
      return;
    }

    let isCancelled = false;

    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const fetches: Promise<MovieSearchResponse>[] = [];

        queries.forEach((query) => {
          for (let page = 1; page <= pagesPerQuery; page++) {
            const searchParams = new URLSearchParams({
              apikey: API_KEY,
              s: query,
              page: String(page),
            });
            fetches.push(
              fetch(`${OMDB_BASE_URL}?${searchParams}`).then(
                (res) => res.json() as Promise<MovieSearchResponse>,
              ),
            );
          }
        });

        const responses = await Promise.all(fetches);

        if (!isCancelled) {
          const allMovies: Movie[] = [];
          responses.forEach((page) => {
            if (page.Search) {
              allMovies.push(...page.Search);
            }
          });

          const unique = allMovies.filter(
            (m, i, arr) => arr.findIndex((x) => x.imdbID === m.imdbID) === i,
          );
          setMovies(unique);
        }
      } catch {
        if (!isCancelled) setMovies(mockMovies);
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    };

    fetchMovies();

    // if queries change before fetch finishes, ignore the stale response
    return () => {
      isCancelled = true;
    };
  }, [queries, pagesPerQuery]);

  return { movies, isLoading };
};
