import Link from 'next/link'
import { getAstrologers, getHoroscopes } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import AstrologerCard from '@/components/AstrologerCard'
import HoroscopeCard from '@/components/HoroscopeCard'

export default async function HomePage() {
  const [astrologers, horoscopes] = await Promise.all([
    getAstrologers(),
    getHoroscopes(),
  ])

  const featuredAstrologers = astrologers.slice(0, 3)
  const featuredHoroscopes = horoscopes.slice(0, 3)

  return (
    <div>
      <Hero />

      {/* Featured Astrologers */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-3xl font-bold text-cosmic-text">
            Featured Astrologers
          </h2>
          <Link
            href="/astrologers"
            className="text-sm font-medium text-cosmic-gold hover:underline"
          >
            View all →
          </Link>
        </div>
        {featuredAstrologers.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredAstrologers.map((astrologer) => (
              <AstrologerCard key={astrologer.id} astrologer={astrologer} />
            ))}
          </div>
        ) : (
          <p className="text-cosmic-muted">No astrologers available yet.</p>
        )}
      </section>

      {/* Featured Horoscopes */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-3xl font-bold text-cosmic-text">
            Latest Horoscopes
          </h2>
          <Link
            href="/horoscopes"
            className="text-sm font-medium text-cosmic-gold hover:underline"
          >
            View all →
          </Link>
        </div>
        {featuredHoroscopes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredHoroscopes.map((horoscope) => (
              <HoroscopeCard key={horoscope.id} horoscope={horoscope} />
            ))}
          </div>
        ) : (
          <p className="text-cosmic-muted">No horoscopes available yet.</p>
        )}
      </section>
    </div>
  )
}