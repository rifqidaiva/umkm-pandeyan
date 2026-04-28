<script setup lang="ts">
import type { ButtonProps } from "@nuxt/ui"

const links = ref<ButtonProps[]>([
  {
    label: "Lihat daftar UMKM",
    to: "/umkm",
    icon: "i-lucide-store",
    color: "primary",
  },
  // {
  //   label: "Baca ringkasan",
  //   to: "#ringkasan",
  //   icon: "i-lucide-file-text",
  //   color: "neutral",
  //   variant: "outline",
  // },
])

const featuredStats = [
  { label: "UMKM aktif", value: "4+" },
  { label: "Kategori usaha", value: "4" },
]

const highlightCards = ref([
  {
    title: "Fokus",
    description: "Informasi mengenai UMKM Kelurahan Pandeyan yang berada di RW 11 dan RW 13.",
    icon: "i-lucide-info",
  },
  {
    title: "Fokus",
    description: "Menautkan pengunjung ke katalog UMKM yang terkurasi.",
    icon: "i-lucide-user",
  },
  {
    title: "Fokus",
    description: "Menyediakan halaman profil UMKM untuk detail usaha dan kontak.",
    icon: "i-lucide-notebook-pen",
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
        title="Wajah ekonomi lokal Pandeyan dalam satu tempat."
        description="Portal ini memperkenalkan UMKM di Kelurahan Pandeyan, khususnya yang berada di RW 11
              dan RW 13. Temukan profil usaha, produk, jam operasional, dan kontak untuk pemesanan
              atau kunjungan—semua tersaji dalam satu katalog digital yang mudah dijelajahi."
        headline="Katalog UMKM Kelurahan Pandeyan"
        orientation="horizontal"
        :links="links">
        <UCard class="overflow-hidden rounded-3xl border border-white bg-white shadow-lg">
          <div class="rounded-2xl bg-slate-950 p-6 text-white">
            <p class="text-sm uppercase tracking-wide text-amber-300">Pandeyan</p>
            <p class="mt-3 text-2xl font-bold">Profil singkat kelurahan</p>
            <p class="mt-3 text-sm leading-6 text-slate-300">
              Pandeyan adalah kawasan yang hidup dengan aktivitas warga, usaha mikro, dan potensi
              ekonomi lokal yang bisa dipetakan melalui katalog digital.
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
