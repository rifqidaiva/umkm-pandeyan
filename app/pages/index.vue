<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"

const links = ref<ButtonProps[]>([
  {
    label: "Lihat booking tempat",
    to: "/booking",
    icon: "i-lucide-calendar-range",
    color: "primary",
  },
  {
    label: "Lihat fasilitas",
    to: "#ringkasan",
    icon: "i-lucide-map-pinned",
    color: "neutral",
    variant: "outline",
  },
])

const featuredStats = [
  { label: "Spot siap booking", value: "4" },
  { label: "Kapasitas total", value: "150+" },
  { label: "Pilihan durasi", value: "2-6 jam" },
]

const highlightCards = ref([
  {
    title: "Pilih spot",
    description: "Lihat pilihan gazebo, pendopo, dan area terbuka yang bisa disesuaikan dengan acara Anda.",
    icon: "i-lucide-map-pinned",
  },
  {
    title: "Cek kapasitas",
    description: "Setiap lokasi menampilkan kapasitas, durasi sewa, dan fasilitas agar booking lebih cepat.",
    icon: "i-lucide-users",
  },
  {
    title: "Konfirmasi booking",
    description: "Hubungi pengelola melalui kontak yang tersedia untuk memastikan jadwal dan kebutuhan acara.",
    icon: "i-lucide-calendar-check-2",
  },
])
</script>

<template>
  <UContainer>
    <UTheme
      :ui="{
        button: {
          base: 'rounded-full',
        },
      }">
      <UPageHero
        title="Rencanakan kegiatan Anda di Taman Legawong."
        description="Portal ini membantu pengunjung memilih dan memesan tempat di Taman Legawong untuk acara keluarga, komunitas, hingga kegiatan santai. Cek kapasitas, fasilitas, dan kontak pengelola dalam satu tampilan yang mudah dijelajahi."
        headline="Booking Tempat Taman Legawong"
        orientation="horizontal"
        :links="links">
        <UCard class="overflow-hidden rounded-3xl border border-white bg-white shadow-lg">
          <div class="rounded-2xl bg-slate-950 p-6 text-white">
            <p class="text-sm uppercase tracking-wide text-amber-300">Taman Legawong</p>
            <p class="mt-3 text-2xl font-bold">Booking cepat, acara lebih tertata</p>
            <p class="mt-3 text-sm leading-6 text-slate-300">
              Pilih lokasi sesuai kebutuhan acara, cek ketersediaan fasilitas, lalu hubungi
              pengelola untuk konfirmasi jadwal kunjungan atau booking tempat.
            </p>
            <div class="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div
                v-for="stat in featuredStats"
                :key="stat.label"
                class="rounded-lg border border-slate-700 bg-slate-800 p-4">
                <p class="text-2xl font-semibold">{{ stat.value }}</p>
                <p class="mt-1 text-sm text-slate-300">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </UCard>
      </UPageHero>
    </UTheme>

    <UPageGrid id="ringkasan">
      <UPageCard
        v-for="(card, index) in highlightCards"
        :key="index"
        v-bind="card" />
    </UPageGrid>
  </UContainer>
</template>
