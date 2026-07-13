// app/astrologers/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAstrologer, getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default async function AstrologerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const astrologer = await getAstrologer(slug)

  if (!astrologer) {
    notFound()
  }

  const name = getMetafieldValue(astrologer.metadata?.name) || astrologer.title
  const bio = getMetafieldValue(astrologer.metadata?.bio)
  const photo = astrologer.metadata?.profile_photo
  const specialties = astrologer.metadata?.specialties || []
  const languages = astrologer.metadata?.languages || []
  const experience = astrologer.metadata?.years_of_experience
  const hourlyRate = astrologer.metadata?.hourly_rate
  const availableNow = astrologer.metadata?.available_now

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/astrologers"
        className="mb-6 inline-block text-sm text-cosmic-muted hover:text-cosmic-gold"
      >
        ← Back to astrologers
      </Link>

      <div className="overflow-hidden rounded-3xl border border-cosmic-border bg-cosmic-card">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square bg-cosmic-surface md:aspect-auto">
            {photo ? (
              <img
                src={`${photo.imgix_url}?w=1000&h=1000&fit=crop&auto=format,compress`}
                alt={name}
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full min-h-[300px] w-full items-center justify-center text-7xl">
                🌙
              </div>
            )}
          </div>
          <div className="p-8">
            <div className="flex items-center gap-3">
              <h1 className="font-display text-3xl font-bold text-cosmic-text">{name}</h1>
              {availableNow && (
                <span className="rounded-full bg-green-500/90 px-3 py-1 text-xs font-semibold text-white">
                  ● Available
                </span>
              )}
            </div>
            <div className="mt-3">
              <StarRating rating={astrologer.metadata?.rating} />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {typeof experience === 'number' && (
                <div className="rounded-xl border border-cosmic-border bg-cosmic-surface/50 p-4">
                  <p className="text-cosmic-muted">Experience</p>
                  <p className="mt-1 text-lg font-semibold text-cosmic-gold">
                    {experience} yrs
                  </p>
                </div>
              )}
              {typeof hourlyRate === 'number' && (
                <div className="rounded-xl border border-cosmic-border bg-cosmic-surface/50 p-4">
                  <p className="text-cosmic-muted">Rate</p>
                  <p className="mt-1 text-lg font-semibold text-cosmic-gold">
                    ${hourlyRate}/hr
                  </p>
                </div>
              )}
            </div>

            {specialties.length > 0 && (
              <div className="mt-6">
                <p className="text-sm font-medium text-cosmic-muted">Specialties</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {specialties.map((s, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-cosmic-purple/20 px-3 py-1 text-xs text-cosmic-purple"
                    >
                      {getMetafieldValue(s)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {languages.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium text-cosmic-muted">Languages</p>
                <p className="mt-1 text-cosmic-text">
                  {languages.map((l) => getMetafieldValue(l)).join(', ')}
                </p>
              </div>
            )}
          </div>
        </div>

        {bio && (
          <div className="border-t border-cosmic-border p-8">
            <h2 className="font-display text-xl font-semibold text-cosmic-text">About</h2>
            <p className="mt-3 leading-relaxed text-cosmic-muted">{bio}</p>
          </div>
        )}
      </div>
    </div>
  )
}