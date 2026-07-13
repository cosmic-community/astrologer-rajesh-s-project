// Map zodiac sign names to emoji symbols
const zodiacEmojis: Record<string, string> = {
  aries: '♈',
  taurus: '♉',
  gemini: '♊',
  cancer: '♋',
  leo: '♌',
  virgo: '♍',
  libra: '♎',
  scorpio: '♏',
  sagittarius: '♐',
  capricorn: '♑',
  aquarius: '♒',
  pisces: '♓',
}

export function getZodiacEmoji(sign: string | undefined): string {
  if (!sign) return '✨'
  const key = sign.toLowerCase().trim()
  return zodiacEmojis[key] || '✨'
}