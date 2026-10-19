/**
 * Satu-satunya sumber fakta untuk semua halaman (/ , /en/ , /zh/).
 * Ubah di sini sahaja supaya kandungan, meta tag dan JSON-LD kekal sepadan.
 */
export const FACTS = {
  name: 'Pasar Besar Siti Khadijah',
  alternateName: 'Pasar Siti Khadijah Kota Bharu',
  streetAddress: 'Jalan Buluh Kubu, Bandar Kota Bharu',
  postalCode: '15000',
  addressLocality: 'Kota Bharu',
  addressRegion: 'Kelantan',
  addressCountry: 'MY',
  fullAddress: 'Jalan Buluh Kubu, Bandar Kota Bharu, 15000 Kota Bharu, Kelantan, Malaysia',
  plusCode: '46JQ+2M Kota Bharu, Kelantan, Malaysia',
  phone: '+60179146218',
  phoneDisplay: '+60 17-914 6218',
  mapLink: 'https://maps.app.goo.gl/UaUCY8Zo64SvTLe59',
  latitude: 6.1300891,
  longitude: 102.23925,
  priceRange: 'RM',
  hours: {
    opens: '07:30',
    closes: '17:30',
    fridayOpens: '07:30',
    display: '07:30–17:30',
  },
  rating: {
    value: 4.2,
    count: 22392,
    best: 5,
    worst: 1,
    source: 'Google Maps',
    synced: '2026-10-19',
  },
};

export const HOURS_NOTE = 'Waktu operasi ialah rujukan; perayaan, Ramadan, cuti umum dan kerja naik taraf boleh mengubah operasi gerai.';

export const SOURCES = {
  maps: { label: 'Google Maps — Pasar Siti Khadijah', url: FACTS.mapLink },
  hours: { label: 'Google Maps — waktu / hours (2026-10-19)', url: FACTS.mapLink },
  tourism: { label: 'Tourism Kelantan — Pasar Siti Khadijah', url: 'https://tourism.kelantan.my/index.php/pelancongan/pusat-membeli-belah/pasar-siti-khadijah' },
};

/** Senarai bahasa untuk hreflang, suis bahasa dan sitemap. */
export const LOCALES = [
  { code: 'ms', path: '/', label: 'Bahasa Melayu', short: 'MS' },
  { code: 'en', path: '/en/', label: 'English', short: 'EN' },
  { code: 'zh-Hans', path: '/zh/', label: '简体中文', short: '中文' },
] as const;

export const ogImagePath = '/images/og-pasar-siti-khadijah.jpg';

export const photoCredits =
  'Kredit foto: Marufish (CC BY-SA 2.0), yeowatzup (CC BY 2.0), CK Tan (CC BY 3.0).';
