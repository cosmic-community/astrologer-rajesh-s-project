# Astrologer Rajesh's Project

![App Preview](https://imgix.cosmicjs.com/725ee360-7ece-11f1-a3cf-2f9ee2d50481-autopilot-photo-1419242902214-272b3f66ee7a-1783956057228.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern astrology platform built with Next.js and [Cosmic](https://www.cosmicjs.com). Browse expert astrologers, view their specialties and rates, and read daily horoscopes for every zodiac sign.

## Features

- 🌟 **Astrologer Directory** — Browse expert astrologers with profiles, specialties, ratings, and availability
- ♈ **Daily Horoscopes** — Read predictions for all zodiac signs with lucky numbers, colors, and moods
- 👤 **Individual Astrologer Pages** — Detailed profiles with bio, experience, languages, and rates
- 🔮 **Horoscope Detail Pages** — Full predictions linked to the astrologer who authored them
- 📱 **Fully Responsive** — Gorgeous cosmic-themed design that works on any device
- ⚡ **Server-Side Rendered** — Fast, SEO-friendly pages powered by Next.js App Router

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a55020667f2f6a3f805fe7a&clone_repository=6a55030d67f2f6a3f805febb)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Astrologer"

### Code Generation Prompt

> Build a Next.js application for a website called "Astrologer Rajesh's Project". The content is managed in Cosmic CMS with the following object types: astrologers, horoscopes. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: Astrologer

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com) — Headless CMS
- [@cosmicjs/sdk](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with a bucket containing `astrologers` and `horoscopes` object types

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set the following environment variables (these are auto-injected in the Cosmic dashboard):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all astrologers
const { objects: astrologers } = await cosmic.objects
  .find({ type: 'astrologers' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single horoscope with its linked astrologer
const { object: horoscope } = await cosmic.objects
  .findOne({ type: 'horoscopes', slug: 'aries-daily' })
  .depth(1)
```

## Cosmic CMS Integration

This app reads two object types from your Cosmic bucket:

- **astrologers** — name, bio, profile_photo, specialties, years_of_experience, hourly_rate, rating, available_now, languages
- **horoscopes** — zodiac_sign, time_period, prediction, lucky_number, lucky_color, mood, astrologer (connected object)

The `horoscopes` type connects to `astrologers` via an object metafield, resolved using the `depth` parameter. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add the environment variables
4. Deploy

### Netlify

1. Connect your repository to [Netlify](https://netlify.com)
2. Set the build command to `bun run build`
3. Add environment variables
4. Deploy
<!-- README_END -->