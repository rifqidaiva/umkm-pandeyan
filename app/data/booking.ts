export type Size = {
  width: number
  length: number
  unit?: "m" | "cm" | string
}

export type Contact = {
  phone: string
  name: string
}

export type Hours = {
  start: string
  end: string
}

export type BookingSpace = {
  slug: string
  name: string
  category: "Pendopo" | "Panggung" | "Taman"
  description: string
  size: Size
  pricePer6Hours: number
  address: string
  images: string[]
  facilities: string[]
  hours: Hours
  contact: Contact
  highlight: string
  locationNote: string
}

export const bookingSpaces: BookingSpace[] = [
  {
    slug: "gazebo-keluarga",
    name: "Gazebo Keluarga",
    category: "Pendopo",
    description:
      "Ruang santai berkapasitas kecil untuk acara keluarga, arisan, atau pertemuan singkat di area taman yang teduh.",
    size: { width: 4, length: 4, unit: "m" },
    pricePer6Hours: 150000,
    address: "Zona utama Taman Legawong, dekat jalur pedestrian",
    images: [],
    facilities: ["Bangku", "Atap teduh", "Dekat akses air", "Cocok untuk keluarga"],
    hours: { start: "08:00", end: "17:00" },
    contact: { phone: "081270001122", name: "Ibu Sari" },
    highlight: "Pilihan paling praktis untuk acara kecil dan santai.",
    locationNote: "Akses mudah dari pintu masuk utama taman.",
  },
  {
    slug: "pendopo-utama",
    name: "Pendopo Utama",
    category: "Pendopo",
    description:
      "Area serbaguna untuk rapat komunitas, acara RT/RW, pelatihan, atau kegiatan formal dengan kapasitas lebih besar.",
    size: { width: 10, length: 12, unit: "m" },
    pricePer6Hours: 375000,
    address: "Bagian tengah taman, dekat area kumpul warga",
    images: ["https://picsum.photos/640/640?random=34"],
    facilities: ["Listrik", "Kursi tambahan", "Panggung kecil", "Area teduh"],
    hours: { start: "08:00", end: "20:00" },
    contact: { phone: "081390002244", name: "Pak Budi" },
    highlight: "Cocok untuk kegiatan komunitas dan acara resmi.",
    locationNote: "Posisi strategis dengan ruang gerak yang luas.",
  },
  {
    slug: "area-piknik-rumput",
    name: "Area Piknik Rumput",
    category: "Taman",
    description:
      "Hamparan rumput terbuka untuk piknik, foto keluarga, gathering santai, dan aktivitas luar ruang yang fleksibel.",
    size: { width: 15, length: 20, unit: "m" },
    pricePer6Hours: 300000,
    address: "Sisi utara taman dengan view hijau terbuka",
    images: ["https://picsum.photos/640/640?random=36", "https://picsum.photos/640/640?random=37"],
    facilities: ["Area luas", "Spot foto", "Teduh di pagi hari", "Cocok untuk tikar dan bekal"],
    hours: { start: "06:00", end: "18:00" },
    contact: { phone: "085710003344", name: "Ibu Rina" },
    highlight: "Favorit untuk acara santai bersama keluarga dan teman.",
    locationNote: "Dekat jalur jalan santai dan beberapa spot foto.",
  },
  {
    slug: "panggung-terbuka",
    name: "Panggung Terbuka",
    category: "Panggung",
    description:
      "Area utama untuk pertunjukan kecil, acara seni, lomba warga, dan kegiatan publik yang membutuhkan ruang tampil luas.",
    size: { width: 20, length: 30, unit: "m" },
    pricePer6Hours: 500000,
    address: "Dekat area event dan akses kendaraan logistik",
    images: [
      "https://picsum.photos/640/640?random=38",
      "https://picsum.photos/640/640?random=39",
      "https://picsum.photos/640/640?random=40",
    ],
    facilities: ["Ruang tampil", "Listrik tambahan", "Area penonton", "Cocok untuk event"],
    hours: { start: "09:00", end: "22:00" },
    contact: { phone: "082150005566", name: "Pak Andi" },
    highlight: "Pilihan terbaik untuk kegiatan besar dan penampilan publik.",
    locationNote: "Mendukung akses peralatan acara dan penataan kursi.",
  },
]

export function getBookingBySlug(slug: string) {
  return bookingSpaces.find((item) => item.slug === slug)
}

export function getBookingCategories() {
  return [...new Set(bookingSpaces.map((item) => item.category))]
}
