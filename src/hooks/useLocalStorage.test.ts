import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { useLocalStorage } from './useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('returns the default value when localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'default'))

    expect(result.current[0]).toBe('default')
  })

  it('updates localStorage when value changes', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initial'))

    act(() => {
      result.current[1]('updated')
    })

    expect(result.current[0]).toBe('updated')
    expect(JSON.parse(localStorage.getItem('testKey')!)).toBe('updated')
  })

  it('handles complex objects', () => {
    const defaultValue = { name: 'test', items: [1, 2, 3] }
    const { result } = renderHook(() => useLocalStorage('testKey', defaultValue))

    expect(result.current[0]).toEqual(defaultValue)

    const newValue = { name: 'updated', items: [4, 5, 6] }
    act(() => {
      result.current[1](newValue)
    })

    expect(result.current[0]).toEqual(newValue)
    expect(JSON.parse(localStorage.getItem('testKey')!)).toEqual(newValue)
  })
})
