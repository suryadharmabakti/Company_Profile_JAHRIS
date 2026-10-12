# JAHRIS Landing Page

Landing page untuk JAHRIS, platform manajemen SDM yang mencakup data karyawan, absensi, payroll, tugas, dan laporan.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Untuk pengecekan sebelum deploy:

```bash
npm run typecheck
npm run lint
npm run build
```

## Struktur folder

```text
app/
  components/
    effects/           Intro video dan sistem animasi
    layout/             Navbar dan primitive navigasi
    sections/
      home/             Section, data, dan footer landing page
      product/          Product showcase interaktif
    shared/             Container dan primitive UI bersama
  globals.css          Token dan style global
  layout.tsx           Metadata dan font
  page.tsx             Komposisi seluruh landing page

public/
  images/
    brand/             Logo dan ikon JAHRIS
    hero/              Visual hero
    product/           Screenshot produk
    proposal/          Gambar pendukung section
  videos/              Video intro
```

## Catatan pengembangan

- Gunakan `next/image` untuk gambar statis di `public/images`.
- Simpan video intro di `public/videos/intro.mp4`.
- Semua link navigasi section dikelola di `app/components/layout/navbar.tsx`.
- Host development LAN yang diizinkan dikelola di `next.config.ts` melalui `allowedDevOrigins`.
