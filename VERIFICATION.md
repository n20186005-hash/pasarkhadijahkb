# Verifikasi projek

## Semakan statik yang telah dibuat

- `package.json` menggunakan versi tepat tanpa `latest`, `*`, `^` atau `~` untuk semua dependency langsung.
- `packageManager` dipin kepada `pnpm@11.21.0` dan `.node-version` sepadan dengan `engines.node` (`24.19.0`).
- `@astrojs/check@0.9.9` dalam lockfile mengisytiharkan peer TypeScript `^5.0.0 || ^6.0.0`; projek menggunakan TypeScript `6.0.3`.
- Importer akar `pnpm-lock.yaml` sepadan dengan versi tepat dalam `package.json`.
- Tiada `pnpm-workspace.yaml` kerana ini projek satu pakej.
- `site` hanya ditetapkan melalui `SITE` dalam `astro.config.mjs`; apabila kosong, sitemap tidak diaktifkan dan canonical/`og:url` tidak dijana.
- Tiada sitemap manual dan tiada `lastmod` rekaan.
- Tiada `example.com`, `localhost` atau `chrome-extension://` dalam sumber projek.
- Semua imej utama, logo dan favicon disimpan secara tempatan; favicon tersedia dalam SVG, 16×16, 32×32 dan Apple Touch 180×180.
- Satu-satunya skrip pihak ketiga yang disengajakan ialah Google tag rasmi untuk GA4 `G-HXM22WWPKP`.

## Had verifikasi dalam persekitaran ini

Persekitaran pelaksanaan yang digunakan untuk menghasilkan projek ini tidak dapat mencapai npm registry melalui proses shell, jadi `corepack` tidak dapat memuat turun pnpm dan dependency. Oleh itu arahan berikut **tidak boleh disahkan sebagai lulus di sini** dan tidak ditandakan secara palsu sebagai berjaya:

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Selepas membina dalam persekitaran yang mempunyai akses registry, jalankan juga:

```bash
grep -RniE 'example\\.com|localhost|chrome-extension://' dist || true
find dist -maxdepth 2 -type f -iname '*sitemap*' -print
```

Jika `SITE` masih kosong, sitemap memang tidak sepatutnya wujud. Selepas domain sebenar dimasukkan pada satu-satunya nilai `SITE`, `@astrojs/sitemap` akan menjana sitemap secara automatik.

## Nota versi

Lockfile yang boleh dipadankan secara statik dalam persekitaran ini menggunakan Astro `7.0.3`, `@astrojs/check` `0.9.9` dan Wrangler `4.112.0`. Semasa penyediaan projek, keluaran stabil yang lebih baharu telah tersedia untuk ketiga-tiganya. Oleh sebab registry tidak boleh dicapai, saya tidak menukar nombor versi tanpa dapat menjana semula dan mengesahkan lockfile secara sebenar. Ini mengekalkan konsistensi `package.json` ↔ `pnpm-lock.yaml`, tetapi bermakna syarat “patch stabil paling terkini” perlu diselesaikan dalam persekitaran berinternet sebelum projek dianggap memenuhi semua syarat CI sepenuhnya.
