import { FACTS } from '../data/market';

type JsonLd = { [key: string]: unknown };

function absUrl(site: URL | undefined, path: string): string | undefined {
  return site ? new URL(path, site).href : undefined;
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
    '@type': 'TouristAttraction',
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
