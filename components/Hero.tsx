import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cosmic-purple">
          ✦ Cosmic Guidance ✦
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-6xl">
          <span className="text-gradient">Discover Your Destiny</span>
          <br />
          <span className="text-cosmic-text">Written in the Stars</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-cosmic-muted">
          Connect with expert astrologers and read personalized daily horoscopes for every
          zodiac sign. Your cosmic journey begins here.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/astrologers"
            className="rounded-full bg-gold-gradient px-8 py-3 font-semibold text-cosmic-bg transition-transform hover:scale-105"
          >
            Meet Our Astrologers
          </Link>
          <Link
            href="/horoscopes"
            className="rounded-full border border-cosmic-border px-8 py-3 font-semibold text-cosmic-text transition-colors hover:border-cosmic-purple hover:text-cosmic-gold"
          >
            Read Horoscopes
          </Link>
        </div>
      </div>
    </section>
  )
}