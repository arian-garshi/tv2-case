import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import MovieCard from './MovieCard'
import type { Movie } from '../../types/omdb'

const mockMovie: Movie = {
  Title: 'The Dark Knight',
  Year: '2008',
  imdbID: 'tt0468569',
  Type: 'movie',
  Poster: 'https://example.com/poster.jpg',
}

describe('MovieCard', () => {
  it('calls onToggleFavorite when overlay is clicked', () => {
    const handleToggle = vi.fn()

    render(
      <MovieCard
        movie={mockMovie}
        isFavorite={false}
        onToggleFavorite={handleToggle}
      />
    )

    // Using fireEvent because the overlay has pointer-events: none until hover
    const overlay = screen.getByLabelText('Add to favorites')
    fireEvent.click(overlay)

    expect(handleToggle).toHaveBeenCalledTimes(1)
  })
})
