import { getHoroscopes } from '@/lib/cosmic'
import HoroscopeCard from '@/components/HoroscopeCard'

export const metadata = {
  title: "Horoscopes | Astrologer Rajesh's Project",
  description: 'Read daily horoscopes and predictions for every zodiac sign.',
}

export default async function HoroscopesPage() {
  const horoscopes = await getHoroscopes()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-bold text-gradient">Horoscopes</h1>
        <p className="mt-3 text-cosmic-muted">
          Personalized readings written in the stars for every sign.
        </p>
      </div>
      {horoscopes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {horoscopes.map((horoscope) => (
            <HoroscopeCard key={horoscope.id} horoscope={horoscope} />
          ))}
        </div>
      ) : (
        <p className="text-center text-cosmic-muted">No horoscopes found.</p>
      )}
    </div>
  )
}