# Pasar Siti Khadijah — Astro one-page guide

Laman satu halaman berbahasa Melayu untuk Pasar Besar Siti Khadijah, Kota Bharu, Kelantan.

## Stack

- Astro `7.0.3`
- Tailwind CSS `4.3.3` melalui `@tailwindcss/vite` `4.3.3`
- TypeScript `6.0.3` + `@astrojs/check` `0.9.9`
- pnpm `11.21.0`
- Cloudflare Workers static assets melalui Wrangler `4.112.0`
- Tiada pangkalan data, login atau CMS

## Domain produksi

Edit **hanya** nilai `SITE` dalam `astro.config.mjs`:

```js
const SITE = '';
```

Biarkan kosong jika domain belum tersedia. Projek masih membina tanpa domain; canonical dan `og:url` akan diabaikan, manakala `og:image` menggunakan laluan relatif. Integrasi `@astrojs/sitemap` hanya diaktifkan apabila `SITE` mempunyai URL sebenar.

## Pembangunan

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Cloudflare Workers

`wrangler.jsonc` menggunakan Worker Static Assets dan folder `./dist`.

```bash
pnpm deploy
```

`compatibility_date` ialah pin teknikal Cloudflare Workers, bukan tarikh kandungan atau tarikh “semakan terakhir”.

## GA4

Measurement ID: `G-HXM22WWPKP`.


## Status verifikasi

Lihat `VERIFICATION.md` untuk semakan statik yang telah dibuat serta had CI dalam persekitaran penghasilan ini.
