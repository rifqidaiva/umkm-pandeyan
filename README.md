# Taman Legawong — Booking Tempat

Situs booking tempat untuk Taman Legawong. Memudahkan pengunjung melihat pilihan lokasi, kapasitas, fasilitas, dan kontak pengelola untuk reservasi.

## Fitur

- Daftar tempat yang bisa dibooking
- Halaman detail lokasi dengan kapasitas, fasilitas, dan kontak
- Galeri foto lokasi
- Peta lokasi Taman Legawong

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

## Menambahkan/ Mengelola data booking

Simpan data booking di folder app/data/booking.ts sebagai array objek. Contoh:

```ts
export const bookingSpaces: BookingSpace[] = [
  {
    slug: "gazebo-keluarga",
    name: "Gazebo Keluarga",
    category: "Gazebo",
    description: "Ruang santai untuk acara keluarga atau arisan kecil.",
    capacity: "10-15 orang",
    duration: "2 jam",
    price: 50000,
    address: "Zona utama Taman Legawong",
    images: ["https://picsum.photos/640/640?random=31"],
    facilities: ["Bangku", "Atap teduh"],
    hours: "08.00 - 17.00",
    contact: "+62 812-7000-1122",
    highlight: "Cocok untuk acara kecil dan santai",
    locationNote: "Akses mudah dari pintu masuk utama taman",
    googleMapsUrl: "https://www.google.com/maps/embed?...",
  },
  // Tambahkan lokasi booking lain di sini
]
```

## Deploy

Lihat dokumentasi deployment Nuxt atau deploy ke platform pilihan (Vercel, Netlify, Render, dsb). Pastikan variabel lingkungan diset di dashboard hosting.

Untuk dokumentasi Nuxt dan panduan deployment, kunjungi https://nuxt.com/docs
