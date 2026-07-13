// app/horoscopes/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getHoroscope, getMetafieldValue } from '@/lib/cosmic'
import { getZodiacEmoji } from '@/lib/zodiac'

export default async function HoroscopeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const horoscope = await getHoroscope(slug)

  if (!horoscope) {
    notFound()
  }

  const sign = getMetafieldValue(horoscope.metadata?.zodiac_sign)
  const timePeriod = getMetafieldValue(horoscope.metadata?.time_period)
  const prediction = getMetafieldValue(horoscope.metadata?.prediction)
  const luckyNumber = horoscope.metadata?.lucky_number
  const luckyColor = getMetafieldValue(horoscope.metadata?.lucky_color)
  const mood = getMetafieldValue(horoscope.metadata?.mood)
  const emoji = getZodiacEmoji(sign)
  const astrologer = horoscope.metadata?.astrologer

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/horoscopes"
        className="mb-6 inline-block text-sm text-cosmic-muted hover:text-cosmic-gold"
      >
        ← Back to horoscopes
      </Link>

      <div className="rounded-3xl border border-cosmic-border bg-cosmic-card p-8">
        <div className="text-center">
          <span className="text-6xl">{emoji}</span>
          <h1 className="mt-4 font-display text-4xl font-bold capitalize text-gradient">
            {sign || horoscope.title}
          </h1>
          {timePeriod && (
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-cosmic-muted">
              {timePeriod}
            </p>
          )}
        </div>

        {prediction && (
          <p className="mt-8 text-lg leading-relaxed text-cosmic-text">{prediction}</p>
        )}

        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {typeof luckyNumber === 'number' && (
            <div className="rounded-2xl border border-cosmic-border bg-cosmic-surface/50 p-4">
              <p className="text-xs uppercase text-cosmic-muted">Lucky Number</p>
              <p className="mt-1 text-2xl font-bold text-cosmic-gold">{luckyNumber}</p>
            </div>
          )}
          {luckyColor && (
            <div className="rounded-2xl border border-cosmic-border bg-cosmic-surface/50 p-4">
              <p className="text-xs uppercase text-cosmic-muted">Lucky Color</p>
              <p className="mt-1 text-lg font-semibold text-cosmic-pink">{luckyColor}</p>
            </div>
          )}
          {mood && (
            <div className="rounded-2xl border border-cosmic-border bg-cosmic-surface/50 p-4">
              <p className="text-xs uppercase text-cosmic-muted">Mood</p>
              <p className="mt-1 text-lg font-semibold text-cosmic-purple">{mood}</p>
            </div>
          )}
        </div>

        {astrologer && (
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-cosmic-border bg-cosmic-surface/30 p-4">
            {astrologer.metadata?.profile_photo ? (
              <img
                src={`${astrologer.metadata.profile_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                alt={getMetafieldValue(astrologer.metadata?.name) || astrologer.title}
                width={60}
                height={60}
                className="h-14 w-14 rounded-full object-cover"
              />
            ) : (
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cosmic-surface text-2xl">
                🌙
              </span>
            )}
            <div>
              <p className="text-xs text-cosmic-muted">Reading by</p>
              <Link
                href={`/astrologers/${astrologer.slug}`}
                className="font-display text-lg font-semibold text-cosmic-text hover:text-cosmic-gold"
              >
                {getMetafieldValue(astrologer.metadata?.name) || astrologer.title}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}