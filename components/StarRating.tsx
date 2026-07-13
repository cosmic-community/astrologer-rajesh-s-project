export default function StarRating({ rating }: { rating?: number }) {
  const safeRating = typeof rating === 'number' ? rating : 0
  const fullStars = Math.floor(safeRating)
  const hasHalf = safeRating - fullStars >= 0.5

  return (
    <div className="flex items-center gap-1">
      <div className="flex text-cosmic-gold">
        {Array.from({ length: 5 }, (_, i) => {
          if (i < fullStars) {
            return <span key={i}>★</span>
          }
          if (i === fullStars && hasHalf) {
            return <span key={i} className="opacity-60">★</span>
          }
          return (
            <span key={i} className="text-cosmic-border">
              ★
            </span>
          )
        })}
      </div>
      {typeof rating === 'number' && (
        <span className="text-sm text-cosmic-muted">{safeRating.toFixed(1)}</span>
      )}
    </div>
  )
}