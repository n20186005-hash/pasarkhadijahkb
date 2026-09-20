# Pasar Siti Khadijah — panduan pelawat berbilang bahasa

Panduan untuk Pasar Besar Siti Khadijah, Kota Bharu, Kelantan dalam tiga bahasa:

| Laluan | Bahasa | `lang` |
| --- | --- | --- |
| `/` | Bahasa Melayu | `ms` |
| `/en/` | English | `en` |
| `/zh/` | 简体中文 | `zh-Hans` |

Setiap halaman berkongsi fakta yang sama daripada `src/data/market.ts` dan skema JSON-LD yang dibina dalam `src/lib/schema.ts`, jadi waktu operasi, alamat, telefon serta penilaian tidak boleh bercanggah antara bahasa.

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

Domain semasa: `https://pasarkhadijahkb.com`. Apabila `SITE` diisi, `astro.config.mjs` mengaktifkan `@astrojs/sitemap`, `BaseLayout.astro` mengeluarkan `canonical`, `og:url`, `hreflang` (termasuk `x-default` ke `/`) dan `public/robots.txt` boleh merujuk `sitemap-index.xml`. Jika domain ditukar, ubah `SITE` serta baris `Sitemap` dalam `public/robots.txt`.

## HTTPS & HSTS

Paksaan HTTP → HTTPS 301 dilakukan di Cloudflare (aktifkan **Always Use HTTPS** pada zon tersebut), bukan dalam kod. `public/_headers` menghantar HSTS dan beberapa header keselamatan tambahan untuk Static Assets.

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
