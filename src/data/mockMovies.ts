import type { Movie } from "../types/omdb";

// Fallback data for when the OMDb API is unavailable
export const mockMovies: Movie[] = [
  {
    Title: "Batman Begins",
    Year: "2005",
    imdbID: "tt0372784",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    imdbID: "tt0468569",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
  },
  {
    Title: "The Dark Knight Rises",
    Year: "2012",
    imdbID: "tt1345836",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
  },
  {
    Title: "Batman v Superman: Dawn of Justice",
    Year: "2016",
    imdbID: "tt2975590",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "Batman",
    Year: "1989",
    imdbID: "tt0096895",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWQ0OTQ3ODctMmE0MS00ODc2LTg0ZTEtZWIwNTUxOGExZTQ4XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
  },
  {
    Title: "Batman Returns",
    Year: "1992",
    imdbID: "tt0103776",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI4LWI2YWYtOWU1YzRiYWExMzliXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
  },
  {
    Title: "Batman Forever",
    Year: "1995",
    imdbID: "tt0112462",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Batman & Robin",
    Year: "1997",
    imdbID: "tt0118688",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTktNmEzNTAxMjc3MmIwXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "The Lego Batman Movie",
    Year: "2017",
    imdbID: "tt4116284",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Animated Series",
    Year: "1992–1995",
    imdbID: "tt0103359",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Under the Red Hood",
    Year: "2010",
    imdbID: "tt1569923",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Killing Joke",
    Year: "2016",
    imdbID: "tt4853102",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5OTk3NzliXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Mask of the Phantasm",
    Year: "1993",
    imdbID: "tt0106364",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTRiMWM3MGItNjAxZC00M2E3LThhODgtM2QwOGNmZGU4OWZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Year One",
    Year: "2011",
    imdbID: "tt1672723",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTJjMmVkZGItM2UwMC00NjExLWExZTYtNDAzYmQ1NjYwMzIxXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Assault on Arkham",
    Year: "2014",
    imdbID: "tt3139086",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDM2OGExYjktNmZhNi00NjBiLWI1MDktYzRhMjM5NzYxMTg1XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Dark Knight Returns",
    Year: "2012",
    imdbID: "tt2313197",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
  },
  {
    Title: "The Batman",
    Year: "2022",
    imdbID: "tt1877830",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
  },
  {
    Title: "Batman: Hush",
    Year: "2019",
    imdbID: "tt8752440",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDEyNTFlMmEtNTAzOC00NDg5LTlhZjAtMGRlOGVlODVlMGE4XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Long Halloween",
    Year: "2021",
    imdbID: "tt14324650",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGVkMjUxMTEtYjg3My00ZTI5LTkxNzAtZDcyYmUwNTAzNjU2XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Son of Batman",
    Year: "2014",
    imdbID: "tt3139072",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjdkZWFhNzctYmNhNy00NGM5LTg0Y2YtZWM4NmRjN2Q0NWEyXkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
  },
];
