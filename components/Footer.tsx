export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-cosmic-border bg-cosmic-surface/50 py-8">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-cosmic-muted">
        <p className="font-display text-gradient text-base">✨ Astrologer Rajesh's Project ✨</p>
        <p className="mt-2">© {year} — Guided by the stars, powered by Cosmic.</p>
      </div>
    </footer>
  )
}