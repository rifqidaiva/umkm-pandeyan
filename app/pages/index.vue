<script setup lang="ts">
const featuredStats = [
  { label: "UMKM aktif", value: "4+" },
  { label: "Kategori usaha", value: "4" },
]

const highlights = [
  "Informasi mengenai UMKM Kelurahan Pandeyan yang berada di RW 11 dan RW 13.",
  "Menautkan pengunjung ke katalog UMKM yang terkurasi.",
  "Menyediakan halaman profil UMKM untuk detail usaha dan kontak.",
]
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- <div
      class="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top_left,rgba(180,83,9,0.18),transparent_38%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_30%),linear-gradient(180deg,rgba(255,251,235,0.9),transparent)]" /> -->

    <div class="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div class="space-y-6">
          <span
            class="inline-flex items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-medium text-amber-900 shadow-sm backdrop-blur">
            Katalog UMKM Kelurahan Pandeyan
          </span>
          <div class="space-y-4">
            <h1
              class="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl font-heading">
              Wajah ekonomi lokal Pandeyan dalam satu tempat.
            </h1>
            <p class="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Portal ini memperkenalkan UMKM di Kelurahan Pandeyan, khususnya yang berada di RW 11
              dan RW 13. Temukan profil usaha, produk, jam operasional, dan kontak untuk pemesanan
              atau kunjungan—semua tersaji dalam satu katalog digital yang mudah dijelajahi.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <NuxtLink
              to="/umkm"
              class="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Lihat daftar UMKM
            </NuxtLink>
            <a
              href="#ringkasan"
              class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
              Baca ringkasan
            </a>
          </div>
        </div>

        <div
          class="rounded-4xl border border-white/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur">
          <div class="rounded-3xl bg-slate-950 p-6 text-white">
            <p class="text-sm uppercase tracking-[0.3em] text-amber-300">Pandeyan</p>
            <p class="mt-3 text-2xl font-semibold font-heading">Profil singkat kelurahan</p>
            <p class="mt-3 text-sm leading-6 text-slate-300">
              Pandeyan adalah kawasan yang hidup dengan aktivitas warga, usaha mikro, dan potensi
              ekonomi lokal yang bisa dipetakan melalui katalog digital.
            </p>
            <div class="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div
                v-for="stat in featuredStats"
                :key="stat.label"
                class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p class="text-2xl font-semibold">{{ stat.value }}</p>
                <p class="mt-1 text-sm text-slate-300">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="ringkasan"
        class="mt-12 grid gap-4 md:grid-cols-3">
        <article
          v-for="item in highlights"
          :key="item"
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-amber-700">Fokus</p>
          <p class="mt-3 text-base leading-7 text-slate-700">{{ item }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
