<script setup lang="ts">
import { getUmkmBySlug } from "~/data/umkm"

const route = useRoute()
const umkm = computed(() => getUmkmBySlug(String(route.params.slug)))

if (!umkm.value) {
  throw createError({ statusCode: 404, statusMessage: "UMKM tidak ditemukan" })
}

useSeoMeta({
  title: `${umkm.value?.name} | UMKM Pandeyan`,
  ogTitle: `${umkm.value?.name} | UMKM Pandeyan`,
  description: umkm.value?.description,
  ogDescription: umkm.value?.description,
})
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
    <NuxtLink
      to="/umkm"
      class="text-sm font-medium text-amber-700 hover:text-amber-800">
      ← Kembali ke daftar UMKM
    </NuxtLink>

    <div
      v-if="umkm"
      class="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div class="space-y-6">
        <div class="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm">
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
            Profil UMKM
          </p>
          <h1 class="mt-3 text-4xl font-semibold tracking-tight text-slate-950 font-heading">
            {{ umkm.name }}
          </h1>
          <p class="mt-3 text-base leading-7 text-slate-600">{{ umkm.description }}</p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span class="rounded-full bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-800">
              {{ umkm.category }}
            </span>
            <span class="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
              Pemilik: {{ umkm.owner }}
            </span>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-3xl border border-slate-200 bg-white p-6">
            <p class="text-sm font-semibold text-slate-900">Produk / layanan</p>
            <ul class="mt-4 space-y-2 text-sm text-slate-600">
              <li
                v-for="product in umkm.products"
                :key="product">
                • {{ product }}
              </li>
            </ul>
          </div>
          <div class="rounded-3xl border border-slate-200 bg-white p-6">
            <p class="text-sm font-semibold text-slate-900">Ringkasan layanan</p>
            <p class="mt-4 text-sm leading-6 text-slate-600">{{ umkm.highlight }}</p>
            <p class="mt-3 text-sm leading-6 text-slate-600">{{ umkm.locationNote }}</p>
          </div>
        </div>
      </div>

      <aside class="rounded-4xl border border-slate-200 bg-slate-950 p-8 text-white shadow-lg">
        <p class="text-sm uppercase tracking-[0.28em] text-amber-300">Detail kontak</p>
        <dl class="mt-6 space-y-5">
          <div>
            <dt class="text-sm text-slate-400">Alamat</dt>
            <dd class="mt-1 text-base font-medium">{{ umkm.address }}</dd>
          </div>
          <div>
            <dt class="text-sm text-slate-400">Jam buka</dt>
            <dd class="mt-1 text-base font-medium">{{ umkm.hours }}</dd>
          </div>
          <div>
            <dt class="text-sm text-slate-400">Kontak</dt>
            <dd class="mt-1 text-base font-medium">{{ umkm.contact }}</dd>
          </div>
        </dl>

        <div class="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5">
          <p class="text-sm font-semibold text-white">Catatan scaffold</p>
          <p class="mt-2 text-sm leading-6 text-slate-300">
            Halaman ini sudah siap dijadikan tempat foto, deskripsi lebih lengkap, maps, testimoni,
            dan tombol WhatsApp bila nanti data real tersedia.
          </p>
        </div>
      </aside>
    </div>
  </section>
</template>
