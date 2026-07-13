import { getAstrologers } from '@/lib/cosmic'
import AstrologerCard from '@/components/AstrologerCard'

export const metadata = {
  title: "Astrologers | Astrologer Rajesh's Project",
  description: 'Browse our expert astrologers, their specialties, ratings, and rates.',
}

export default async function AstrologersPage() {
  const astrologers = await getAstrologers()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-bold text-gradient">Our Astrologers</h1>
        <p className="mt-3 text-cosmic-muted">
          Connect with experienced astrologers to guide your cosmic journey.
        </p>
      </div>
      {astrologers.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {astrologers.map((astrologer) => (
            <AstrologerCard key={astrologer.id} astrologer={astrologer} />
          ))}
        </div>
      ) : (
        <p className="text-center text-cosmic-muted">No astrologers found.</p>
      )}
    </div>
  )
}