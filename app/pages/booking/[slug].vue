<script setup lang="ts">
import { getBookingBySlug } from "~/data/booking"

const route = useRoute()
const booking = computed(() => getBookingBySlug(String(route.params.slug)))

if (!booking.value) {
  throw createError({ statusCode: 404, statusMessage: "Booking tempat tidak ditemukan" })
}

useSeoMeta({
  title: `${booking.value?.name} | Taman Legawong`,
  ogTitle: `${booking.value?.name} | Taman Legawong`,
  description: booking.value?.description,
  ogDescription: booking.value?.description,
})
</script>

<template>
  <UContainer class="py-10 sm:py-12">
    <UButton
      to="/booking"
      icon="i-lucide-arrow-left"
      label="Kembali ke daftar booking"
      color="neutral"
      variant="link"
      class="mb-6" />

    <div
      v-if="booking"
      class="grid gap-6 lg:gap-8 lg:grid-cols-3 lg:items-start">
      <div class="space-y-6 lg:col-span-2">
        <UCard>
          <template #header>
            <p class="text-sm font-semibold uppercase tracking-wide text-primary">Detail booking</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl">
              {{ booking.name }}
            </h1>
          </template>

          <p class="text-sm leading-6 text-muted sm:text-base">
            {{ booking.description }}
          </p>

          <div class="mt-4 flex flex-wrap gap-2">
            <UBadge
              color="primary"
              variant="soft">
              {{ booking.category }}
            </UBadge>
            <UBadge
              color="neutral"
              variant="soft">
              Kapasitas: {{ booking.capacity }}
            </UBadge>
            <UBadge
              color="neutral"
              variant="soft">
              Durasi: {{ booking.duration }}
            </UBadge>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted">Foto lokasi</h2>
          </template>
          <div class="sm:px-10">
            <UCarousel
              v-if="booking.images.length > 1"
              v-slot="{ item }"
              arrows
              :prev="{ color: 'primary' }"
              :next="{ variant: 'solid' }"
              :items="booking.images"
              class="w-full">
              <img
                :src="item"
                :alt="`Foto ${booking.name}`"
                class="h-full w-full rounded-lg aspect-video object-cover"
                loading="lazy" />
            </UCarousel>
            <div
              v-else-if="booking.images.length === 1"
              class="relative aspect-video overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800">
              <img
                :src="booking.images[0]"
                :alt="`Foto ${booking.name}`"
                class="h-full w-full object-cover" />
            </div>
            <NoImage v-else />
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted flex items-center gap-2">
              <UIcon name="i-lucide-sparkles" />
              Fasilitas & catatan
            </h2>
          </template>

          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="facility in booking.facilities"
              :key="facility"
              color="neutral"
              variant="soft">
              {{ facility }}
            </UBadge>
          </div>

          <div class="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p class="text-sm font-semibold text-highlighted">Alamat area</p>
              <p class="mt-1 text-sm text-muted">{{ booking.address }}</p>
            </div>
            <div>
              <p class="text-sm font-semibold text-highlighted">Jam booking</p>
              <p class="mt-1 text-sm text-muted">{{ booking.hours }}</p>
            </div>
          </div>
        </UCard>
      </div>

      <div class="space-y-6 lg:col-span-1">
        <UCard class="order-first lg:order-last">
          <template #header>
            <h2 class="text-base font-semibold text-highlighted">Ringkasan booking</h2>
          </template>

          <dl class="space-y-4 text-sm">
            <div>
              <dt class="text-muted">Harga mulai</dt>
              <dd class="mt-1 font-medium text-highlighted">
                Rp {{ booking.price.toLocaleString("id-ID") }},-
              </dd>
            </div>
            <div>
              <dt class="text-muted">Kontak pengelola</dt>
              <dd class="mt-1 font-medium text-highlighted">{{ booking.contact }}</dd>
            </div>
            <div>
              <dt class="text-muted">Catatan</dt>
              <dd class="mt-1 font-medium text-highlighted">{{ booking.locationNote }}</dd>
            </div>
          </dl>

          <UButton
            class="mt-6 w-full"
            color="primary"
            variant="solid"
            icon="i-lucide-message-circle-more"
            :to="`https://wa.me/${booking.contact.replace(/[^0-9]/g, '')}`"
            target="_blank">
            Booking via WhatsApp
          </UButton>

          <p class="mt-4 text-xs leading-5 text-muted">
            Konfirmasi jadwal, jumlah tamu, dan kebutuhan tambahan sebelum datang ke lokasi.
          </p>

          <iframe
            class="w-full rounded-xl mt-6 aspect-video border-0"
            :src="booking.googleMapsUrl"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
