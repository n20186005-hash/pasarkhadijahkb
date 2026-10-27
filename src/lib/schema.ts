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

export function buildBreadcrumb(
  site: URL | undefined,
  path: string,
  name: string,
  homeName = 'Home',
  homePath = '/en/',
): JsonLd {
  const home = absUrl(site, homePath);
  const here = absUrl(site, path);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: homeName, ...(home ? { item: home } : {}) },
      { '@type': 'ListItem', position: 2, name, ...(here ? { item: here } : {}) },
    ],
  };
}

export function buildWebPage(
  site: URL | undefined,
  path: string,
  title: string,
  description: string,
  inLanguage = 'en-MY',
  homePath = '/en/',
): JsonLd {
  const url = absUrl(site, path);
  const home = absUrl(site, homePath);
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    ...(url ? { url, '@id': url } : {}),
    isPartOf: { '@type': 'WebSite', name: 'Pasar Siti Khadijah Kota Bharu', ...(site ? { url: site.href } : {}) },
    about: {
      '@type': 'TouristAttraction',
      name: FACTS.name,
      ...(home ? { '@id': home } : {}),
    },
    inLanguage,
  };
}
