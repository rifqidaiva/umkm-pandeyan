<script setup lang="ts">
import { getUmkmCategories, umkmList } from "~/data/umkm"

const categories = getUmkmCategories()
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UPageHeader
      class="max-w-3xl"
      title="Katalog usaha yang terdapat di Kelurahan Pandeyan RW 11 dan RW 13."
      description="Temukan berbagai usaha mikro yang beragam, mulai dari kuliner, kerajinan tangan, hingga layanan lokal lainnya. Setiap profil UMKM menyajikan informasi lengkap tentang produk, jam operasional, dan kontak untuk memudahkan Anda menjelajahi kekayaan ekonomi lokal Pandeyan."
      headline="DAFTAR UMKM" />

    <div class="mt-8 flex flex-wrap gap-2">
      <UBadge
        v-for="category in categories"
        :key="category"
        color="neutral"
        variant="soft"
        class="rounded-full px-3 py-1 font-semibold">
        {{ category }}
      </UBadge>
    </div>

    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <UCard
        v-for="item in umkmList"
        :key="item.slug"
        class="h-full">
        <template #header>
          <div class="space-y-4">
            <div
              class="flex aspect-video items-center justify-center rounded-lg border border-dashed border-neutral-300 bg-neutral-50 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400">
              <div class="flex flex-col items-center gap-2 text-center p-4">
                <UIcon
                  name="i-lucide-image"
                  class="size-6" />
                <p class="text-xs font-medium">Tempat gambar UMKM</p>
              </div>
            </div>

            <div class="flex items-start justify-between gap-3">
              <div>
                <UBadge
                  color="primary"
                  variant="soft"
                  class="mb-2">
                  {{ item.category }}
                </UBadge>
                <h2 class="text-lg font-semibold text-highlighted">
                  {{ item.name }}
                </h2>
              </div>

              <UBadge
                color="neutral"
                variant="outline"
                class="whitespace-nowrap">
                {{ item.owner }}
              </UBadge>
            </div>
          </div>
        </template>

        <p class="text-sm text-muted">
          {{ item.description }}
        </p>

        <div class="mt-4 flex flex-wrap gap-2">
          <UBadge
            v-for="product in item.products"
            :key="product"
            color="neutral"
            variant="subtle"
            size="sm">
            {{ product }}
          </UBadge>
        </div>

        <div class="mt-5 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <p class="font-semibold text-highlighted">Alamat</p>
            <p class="mt-1 text-muted">{{ item.address }}</p>
          </div>
          <div>
            <p class="font-semibold text-highlighted">Jam buka</p>
            <p class="mt-1 text-muted">{{ item.hours }}</p>
          </div>
        </div>

        <template #footer>
          <div class="flex items-center justify-between gap-3">
            <p class="line-clamp-2 text-sm text-muted">{{ item.highlight }}</p>
            <UButton
              :to="`/umkm/${item.slug}`"
              label="Profil UMKM"
              icon="i-lucide-arrow-right"
              trailing
              color="neutral"
              variant="solid"
              size="sm" />
          </div>
        </template>
      </UCard>
    </div>
  </UContainer>
</template>
