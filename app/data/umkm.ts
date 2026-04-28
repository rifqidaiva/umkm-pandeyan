export type UmkmCategory = "Kuliner" | "Jasa" | "Kerajinan" | "Ritel"

export type Umkm = {
  slug: string
  name: string
  category: UmkmCategory
  owner: string
  address: string
  description: string
  products: string[]
  hours: string
  contact: string
  highlight: string
  locationNote: string
}

export const umkmList: Umkm[] = [
  {
    slug: "sari-rasa-pandeyan",
    name: "Sari Rasa Pandeyan",
    category: "Kuliner",
    owner: "Ibu Sari",
    address: "Jl. Pandeyan Utara No. 12, Pandeyan",
    description:
      "Usaha rumahan yang menyiapkan aneka lauk harian, snack, dan nasi kotak untuk warga sekitar serta pesanan acara kecil.",
    products: ["Nasi kotak", "Snack box", "Lauk harian", "Kue tradisional"],
    hours: "06.00 - 19.00",
    contact: "+62 812-3456-7890",
    highlight: "Menerima pesanan harian dan acara keluarga.",
    locationNote: "Dekat area permukiman warga dan mudah dijangkau dari jalan utama.",
  },
  {
    slug: "pandeyan-print",
    name: "Pandeyan Print",
    category: "Jasa",
    owner: "Mas Arif",
    address: "Jl. Imogiri Timur Km 5,5, Pandeyan",
    description:
      "Melayani cetak dokumen, banner, stiker, dan kebutuhan desain sederhana untuk pelajar, warga, dan UMKM lain.",
    products: ["Print dokumen", "Banner", "Stiker label", "Desain sederhana"],
    hours: "08.00 - 21.00",
    contact: "+62 813-2222-4444",
    highlight: "Cocok untuk kebutuhan cepat dan pesanan satuan.",
    locationNote: "Akses langsung dari jalur ramai dengan layanan antar-jemput file.",
  },
  {
    slug: "batik-tulis-lestari",
    name: "Batik Tulis Lestari",
    category: "Kerajinan",
    owner: "Ibu Lestari",
    address: "RT 04 RW 02, Kelurahan Pandeyan",
    description:
      "Membuat batik tulis dan produk turunan seperti scarf, tote bag, serta souvenir untuk acara desa atau sekolah.",
    products: ["Batik tulis", "Scarf", "Tote bag", "Souvenir custom"],
    hours: "09.00 - 17.00",
    contact: "+62 821-9087-6543",
    highlight: "Bisa custom motif untuk kebutuhan komunitas.",
    locationNote: "Berbasis rumah produksi dengan kunjungan by appointment.",
  },
  {
    slug: "toko-sembako-mak-mur",
    name: "Toko Sembako Mak Mur",
    category: "Ritel",
    owner: "Bu Mur",
    address: "Jl. Pandeyan Selatan No. 8, Pandeyan",
    description:
      "Toko kelontong yang menyediakan kebutuhan pokok harian, pulsa, gas, dan perlengkapan rumah tangga ringan.",
    products: ["Beras", "Minyak", "Gas elpiji", "Pulsa & token"],
    hours: "06.30 - 22.00",
    contact: "+62 857-1111-2233",
    highlight: "Stok kebutuhan harian untuk warga sekitar.",
    locationNote: "Lokasi strategis di lingkungan padat penduduk.",
  },
]

export function getUmkmBySlug(slug: string) {
  return umkmList.find((item) => item.slug === slug)
}

export function getUmkmCategories() {
  return [...new Set(umkmList.map((item) => item.category))]
}
