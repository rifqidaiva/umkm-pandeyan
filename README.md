# UMKM Pandeyan — Katalog UMKM Kelurahan Pandeyan

Situs katalog untuk menampilkan profil dan produk UMKM di Kelurahan Pandeyan. Memudahkan warga dan pengunjung menemukan usaha lokal, melihat detail usaha, dan menghubungi pemilik.

## Fitur

- Daftar UMKM dengan pencarian dan filter
- Halaman profil UMKM (deskripsi, produk, kontak, lokasi)
- Galeri foto produk
- Peta lokasi UMKM (opsional)

## Teknologi

- Nuxt (Vue) untuk frontend
- Tailwind CSS / SCSS untuk styling (sesuaikan dengan project)
- Data: JSON

## Persiapan

Install dependensi:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Menjalankan server development

Jalankan server development (default http://localhost:3000):

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Build untuk produksi

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Pratinjau build produksi:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Menambahkan/ Mengelola data UMKM

Simpan data UMKM di folder data/umkm.ts sebagai array objek. Contoh:

```ts
export const umkmList: Umkm[] = [
  {
    slug: "umkm-1",
    name: "UMKM Contoh",
    category: "Kuliner",
    owner: "Budi",
    address: "Jl. Contoh No. 1",
    description: "UMKM contoh yang menjual makanan lezat.",
    products: ["Nasi Goreng", "Mie Ayam"],
    hours: "10:00 - 20:00",
    contact: "08123456789",
    highlight: "Makanan enak dengan harga terjangkau",
    locationNote: "Dekat alun-alun Pandeyan",
  },
  // Tambahkan UMKM lain di sini
]
```

## Deploy

Lihat dokumentasi deployment Nuxt atau deploy ke platform pilihan (Vercel, Netlify, Render, dsb). Pastikan variabel lingkungan diset di dashboard hosting.

Untuk dokumentasi Nuxt dan panduan deployment, kunjungi https://nuxt.com/docs
