export type BookingSpace = {
  slug: string
  name: string
  category: "Gazebo" | "Pendopo" | "Area Terbuka" | "Panggung"
  description: string
  capacity: string
  duration: string
  price: number
  address: string
  images: string[]
  facilities: string[]
  hours: string
  contact: string
  highlight: string
  locationNote: string
  googleMapsUrl: string
}

export const bookingSpaces: BookingSpace[] = [
  {
    slug: "gazebo-keluarga",
    name: "Gazebo Keluarga",
    category: "Gazebo",
    description:
      "Ruang santai berkapasitas kecil untuk acara keluarga, arisan, atau pertemuan singkat di area taman yang teduh.",
    capacity: "10-15 orang",
    duration: "2 jam",
    price: 50000,
    address: "Zona utama Taman Legawong, dekat jalur pedestrian",
    images: [
      "https://picsum.photos/640/640?random=31",
      "https://picsum.photos/640/640?random=32",
      "https://picsum.photos/640/640?random=33",
    ],
    facilities: ["Bangku", "Atap teduh", "Dekat akses air", "Cocok untuk keluarga"],
    hours: "08.00 - 17.00",
    contact: "+62 812-7000-1122",
    highlight: "Pilihan paling praktis untuk acara kecil dan santai.",
    locationNote: "Akses mudah dari pintu masuk utama taman.",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.64074262138!2d110.3900!3d-7.8250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57d3b4c1aaaa%3A0x0000000000000000!2sTaman%20Legawong!5e0!3m2!1sid!2sid!4v1777478713701!5m2!1sid!2sid",
  },
  {
    slug: "pendopo-utama",
    name: "Pendopo Utama",
    category: "Pendopo",
    description:
      "Area serbaguna untuk rapat komunitas, acara RT/RW, pelatihan, atau kegiatan formal dengan kapasitas lebih besar.",
    capacity: "30-50 orang",
    duration: "4 jam",
    price: 250000,
    address: "Bagian tengah taman, dekat area kumpul warga",
    images: ["https://picsum.photos/640/640?random=34", "https://picsum.photos/640/640?random=35"],
    facilities: ["Listrik", "Kursi tambahan", "Panggung kecil", "Area teduh"],
    hours: "08.00 - 20.00",
    contact: "+62 813-9000-2244",
    highlight: "Cocok untuk kegiatan komunitas dan acara resmi.",
    locationNote: "Posisi strategis dengan ruang gerak yang luas.",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.64074262138!2d110.3900!3d-7.8250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57d3b4c1aaaa%3A0x0000000000000000!2sTaman%20Legawong!5e0!3m2!1sid!2sid!4v1777478713701!5m2!1sid!2sid",
  },
  {
    slug: "area-piknik-rumput",
    name: "Area Piknik Rumput",
    category: "Area Terbuka",
    description:
      "Hamparan rumput terbuka untuk piknik, foto keluarga, gathering santai, dan aktivitas luar ruang yang fleksibel.",
    capacity: "20-40 orang",
    duration: "3 jam",
    price: 150000,
    address: "Sisi utara taman dengan view hijau terbuka",
    images: ["https://picsum.photos/640/640?random=36", "https://picsum.photos/640/640?random=37"],
    facilities: ["Area luas", "Spot foto", "Teduh di pagi hari", "Cocok untuk tikar dan bekal"],
    hours: "06.00 - 18.00",
    contact: "+62 857-1000-3344",
    highlight: "Favorit untuk acara santai bersama keluarga dan teman.",
    locationNote: "Dekat jalur jalan santai dan beberapa spot foto.",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.64074262138!2d110.3900!3d-7.8250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57d3b4c1aaaa%3A0x0000000000000000!2sTaman%20Legawong!5e0!3m2!1sid!2sid!4v1777478713701!5m2!1sid!2sid",
  },
  {
    slug: "panggung-terbuka",
    name: "Panggung Terbuka",
    category: "Panggung",
    description:
      "Area utama untuk pertunjukan kecil, acara seni, lomba warga, dan kegiatan publik yang membutuhkan ruang tampil luas.",
    capacity: "50-100 orang",
    duration: "6 jam",
    price: 500000,
    address: "Dekat area event dan akses kendaraan logistik",
    images: [
      "https://picsum.photos/640/640?random=38",
      "https://picsum.photos/640/640?random=39",
      "https://picsum.photos/640/640?random=40",
    ],
    facilities: ["Ruang tampil", "Listrik tambahan", "Area penonton", "Cocok untuk event"],
    hours: "09.00 - 22.00",
    contact: "+62 821-5000-5566",
    highlight: "Pilihan terbaik untuk kegiatan besar dan penampilan publik.",
    locationNote: "Mendukung akses peralatan acara dan penataan kursi.",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.64074262138!2d110.3900!3d-7.8250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57d3b4c1aaaa%3A0x0000000000000000!2sTaman%20Legawong!5e0!3m2!1sid!2sid!4v1777478713701!5m2!1sid!2sid",
  },
]

export function getBookingBySlug(slug: string) {
  return bookingSpaces.find((item) => item.slug === slug)
}

export function getBookingCategories() {
  return [...new Set(bookingSpaces.map((item) => item.category))]
}