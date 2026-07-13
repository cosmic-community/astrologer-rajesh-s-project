import { createBucketClient } from '@cosmicjs/sdk'
import type { Astrologer, Horoscope } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Safely render metafield values that may be objects or primitives
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

// Fetch all astrologers
export async function getAstrologers(): Promise<Astrologer[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'astrologers' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Astrologer[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch astrologers')
  }
}

// Fetch a single astrologer by slug
export async function getAstrologer(slug: string): Promise<Astrologer | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'astrologers', slug })
      .depth(1)
    return response.object as Astrologer
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch astrologer')
  }
}

// Fetch all horoscopes
export async function getHoroscopes(): Promise<Horoscope[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'horoscopes' })
      .props(['id', 'slug', 'title', 'metadata'])
      .depth(1)
    return response.objects as Horoscope[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch horoscopes')
  }
}

// Fetch a single horoscope by slug
export async function getHoroscope(slug: string): Promise<Horoscope | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'horoscopes', slug })
      .depth(1)
    return response.object as Horoscope
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch horoscope')
  }
}