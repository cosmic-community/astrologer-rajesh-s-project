import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <span className="text-6xl">🌌</span>
      <h1 className="mt-6 font-display text-4xl font-bold text-gradient">Lost in the Cosmos</h1>
      <p className="mt-3 text-cosmic-muted">
        The page you're looking for has drifted beyond our star charts.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gold-gradient px-8 py-3 font-semibold text-cosmic-bg transition-transform hover:scale-105"
      >
        Return Home
      </Link>
    </div>
  )
}