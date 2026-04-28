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
  <UContainer class="py-10 sm:py-12">
    <UButton
      to="/umkm"
      icon="i-lucide-arrow-left"
      label="Kembali ke daftar UMKM"
      color="neutral"
      variant="ghost"
      class="mb-6" />

    <div
      v-if="umkm"
      class="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div class="space-y-6">
        <UCard>
          <template #header>
            <p class="text-sm font-semibold uppercase tracking-wide text-primary">Profil UMKM</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">
              {{ umkm.name }}
            </h1>
          </template>

          <p class="text-sm leading-6 text-muted sm:text-base">
            {{ umkm.description }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <UBadge
              color="primary"
              variant="soft">
              {{ umkm.category }}
            </UBadge>
            <UBadge
              color="neutral"
              variant="soft">
              Pemilik: {{ umkm.owner }}
            </UBadge>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted">Foto UMKM</h2>
          </template>

          <div
            class="flex aspect-video items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-neutral-50 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
            <div class="flex flex-col items-center gap-2 text-center">
              <UIcon
                name="i-lucide-image"
                class="size-7" />
              <p class="text-xs font-medium">Tempat foto utama UMKM</p>
            </div>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted">Produk / layanan</h2>
          </template>

          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="product in umkm.products"
              :key="product"
              color="neutral"
              variant="subtle">
              {{ product }}
            </UBadge>
          </div>
        </UCard>
      </div>

      <div class="space-y-6">
        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted">Detail kontak</h2>
          </template>

          <dl class="space-y-4 text-sm">
            <div>
              <dt class="text-muted">Alamat</dt>
              <dd class="mt-1 font-medium text-highlighted">{{ umkm.address }}</dd>
            </div>
            <div>
              <dt class="text-muted">Jam buka</dt>
              <dd class="mt-1 font-medium text-highlighted">{{ umkm.hours }}</dd>
            </div>
            <div>
              <dt class="text-muted">Kontak</dt>
              <dd class="mt-1 font-medium text-highlighted">{{ umkm.contact }}</dd>
            </div>
          </dl>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted">Foto produk</h2>
          </template>

          <div class="grid gap-3 sm:grid-cols-2">
            <div
              v-for="product in umkm.products"
              :key="`photo-${product}`"
              class="flex min-h-28 items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-neutral-50 p-4 text-center text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
              <div class="space-y-1">
                <UIcon
                  name="i-lucide-image"
                  class="mx-auto size-5" />
                <p class="text-xs font-medium">Foto produk: {{ product }}</p>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
