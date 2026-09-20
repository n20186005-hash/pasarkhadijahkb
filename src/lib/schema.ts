import { FACTS } from '../data/market';

type JsonLd = { [key: string]: unknown };

function absUrl(site: URL | undefined, path: string): string | undefined {
  return site ? new URL(path, site).href : undefined;
}

const DAYS_MS = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];
const DAY_SCHEMA = {
  Ahad: 'Sunday',
  Isnin: 'Monday',
  Selasa: 'Tuesday',
  Rabu: 'Wednesday',
  Khamis: 'Thursday',
  Jumaat: 'Friday',
  Sabtu: 'Saturday',
} as Record<string, string>;

function openingHours() {
  return DAYS_MS.map((day) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${DAY_SCHEMA[day]}`,
    opens: day === 'Jumaat' ? FACTS.hours.fridayOpens : FACTS.hours.opens,
    closes: FACTS.hours.closes,
  }));
}

interface AttractionInput {
  site: URL | undefined;
  path: string;
  name: string;
  alternateName: string;
  description: string;
}

export function buildAttraction({ site, path, name, alternateName, description }: AttractionInput): JsonLd {
  const url = absUrl(site, path);
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LocalBusiness'],
    name,
    alternateName,
    description,
    ...(url ? { url, '@id': url } : {}),
    image: site
      ? [
          absUrl(site, '/images/pasar-atrium.webp'),
          absUrl(site, '/images/peniaga-wanita.webp'),
          absUrl(site, '/images/luar-pasar.webp'),
        ]
      : undefined,
    telephone: FACTS.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: FACTS.streetAddress,
      postalCode: FACTS.postalCode,
      addressLocality: FACTS.addressLocality,
      addressRegion: FACTS.addressRegion,
      addressCountry: FACTS.addressCountry,
    },
    geo: { '@type': 'GeoCoordinates', latitude: FACTS.latitude, longitude: FACTS.longitude },
    hasMap: FACTS.mapLink,
    openingHoursSpecification: openingHours(),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: FACTS.rating.value,
      reviewCount: FACTS.rating.count,
      bestRating: FACTS.rating.best,
      worstRating: FACTS.rating.worst,
    },
    priceRange: FACTS.priceRange,
    isAccessibleForFree: true,
  };
}

export function buildFaq(faqs: { q: string; a: string }[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
