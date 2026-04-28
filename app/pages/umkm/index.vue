<script setup lang="ts">
import { getUmkmCategories, umkmList } from "~/data/umkm"

const categories = getUmkmCategories()
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
    <div class="max-w-3xl space-y-4">
      <p class="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">Daftar UMKM</p>
      <h1 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl font-heading">
        Katalog usaha yang terdapat di Kelurahan Pandeyan RW 11 dan RW 13.
      </h1>
      <p class="text-base leading-7 text-slate-600">
        Temukan berbagai usaha mikro yang beragam, mulai dari kuliner, kerajinan tangan, hingga
        layanan lokal lainnya. Setiap profil UMKM menyajikan informasi lengkap tentang produk, jam
        operasional, dan kontak untuk memudahkan Anda menjelajahi kekayaan ekonomi lokal Pandeyan.
      </p>
    </div>

    <div class="mt-8 flex flex-wrap gap-2">
      <span
        v-for="category in categories"
        :key="category"
        class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
        {{ category }}
      </span>
    </div>

    <div class="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
      <article
        v-for="item in umkmList"
        :key="item.slug"
        class="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-amber-700">{{ item.category }}</p>
            <h2 class="mt-2 text-2xl font-semibold text-slate-950 font-heading">{{ item.name }}</h2>
          </div>
          <div class="rounded-2xl bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">
            {{ item.owner }}
          </div>
        </div>

        <p class="mt-4 text-sm leading-6 text-slate-600">
          {{ item.description }}
        </p>

        <div class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="product in item.products"
            :key="product"
            class="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
            {{ product }}
          </span>
        </div>

        <div class="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
          <div>
            <p class="font-semibold text-slate-900">Alamat</p>
            <p class="mt-1 leading-6">{{ item.address }}</p>
          </div>
          <div>
            <p class="font-semibold text-slate-900">Jam buka</p>
            <p class="mt-1 leading-6">{{ item.hours }}</p>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-between gap-4">
          <p class="text-sm text-slate-600">{{ item.highlight }}</p>
          <NuxtLink
            :to="`/umkm/${item.slug}`"
            class="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
            Profil UMKM
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>
