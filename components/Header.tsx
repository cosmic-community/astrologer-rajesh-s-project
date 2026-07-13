import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-cosmic-border bg-cosmic-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🔮</span>
          <span className="font-display text-lg font-semibold text-gradient sm:text-xl">
            Astrologer Rajesh
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/astrologers"
            className="text-cosmic-muted transition-colors hover:text-cosmic-gold"
          >
            Astrologers
          </Link>
          <Link
            href="/horoscopes"
            className="text-cosmic-muted transition-colors hover:text-cosmic-gold"
          >
            Horoscopes
          </Link>
        </nav>
      </div>
    </header>
  )
}