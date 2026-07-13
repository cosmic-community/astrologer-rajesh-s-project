import Link from 'next/link'
import type { Horoscope } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { getZodiacEmoji } from '@/lib/zodiac'

export default function HoroscopeCard({ horoscope }: { horoscope: Horoscope }) {
  const sign = getMetafieldValue(horoscope.metadata?.zodiac_sign)
  const timePeriod = getMetafieldValue(horoscope.metadata?.time_period)
  const prediction = getMetafieldValue(horoscope.metadata?.prediction)
  const emoji = getZodiacEmoji(sign)

  return (
    <Link
      href={`/horoscopes/${horoscope.slug}`}
      className="group block rounded-2xl border border-cosmic-border bg-cosmic-card p-6 transition-all duration-300 hover:border-cosmic-pink hover:shadow-glow"
    >
      <div className="flex items-center gap-3">
        <span className="text-4xl">{emoji}</span>
        <div>
          <h3 className="font-display text-xl font-semibold capitalize text-cosmic-text group-hover:text-cosmic-gold">
            {sign || horoscope.title}
          </h3>
          {timePeriod && (
            <span className="text-xs uppercase tracking-wide text-cosmic-muted">
              {timePeriod}
            </span>
          )}
        </div>
      </div>
      {prediction && (
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-cosmic-muted">
          {prediction}
        </p>
      )}
      <span className="mt-4 inline-block text-sm font-medium text-cosmic-pink">
        Read full reading →
      </span>
    </Link>
  )
}