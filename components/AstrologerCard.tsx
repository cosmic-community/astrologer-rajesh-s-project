import Link from 'next/link'
import type { Astrologer } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default function AstrologerCard({ astrologer }: { astrologer: Astrologer }) {
  const name = getMetafieldValue(astrologer.metadata?.name) || astrologer.title
  const photo = astrologer.metadata?.profile_photo
  const specialties = astrologer.metadata?.specialties || []
  const availableNow = astrologer.metadata?.available_now
  const hourlyRate = astrologer.metadata?.hourly_rate

  return (
    <Link
      href={`/astrologers/${astrologer.slug}`}
      className="group block overflow-hidden rounded-2xl border border-cosmic-border bg-cosmic-card transition-all duration-300 hover:border-cosmic-purple hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cosmic-surface">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-5xl">🌙</div>
        )}
        {availableNow && (
          <span className="absolute right-3 top-3 rounded-full bg-green-500/90 px-3 py-1 text-xs font-semibold text-white">
            ● Available
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-cosmic-text group-hover:text-cosmic-gold">
          {name}
        </h3>
        <div className="mt-2">
          <StarRating rating={astrologer.metadata?.rating} />
        </div>
        {specialties.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {specialties.slice(0, 3).map((s, i) => (
              <span
                key={i}
                className="rounded-full bg-cosmic-purple/20 px-3 py-1 text-xs text-cosmic-purple"
              >
                {getMetafieldValue(s)}
              </span>
            ))}
          </div>
        )}
        {typeof hourlyRate === 'number' && (
          <p className="mt-4 text-sm text-cosmic-muted">
            <span className="font-semibold text-cosmic-gold">${hourlyRate}</span> / hour
          </p>
        )}
      </div>
    </Link>
  )
}