<script setup lang="ts">
import { getBookingBySlug } from "~/data/booking"
import { getReservationsForSpace } from '~/data/reservations'

const route = useRoute()
const booking = computed(() => getBookingBySlug(String(route.params.slug)))

if (!booking.value) {
  throw createError({ statusCode: 404, statusMessage: "Booking tempat tidak ditemukan" })
}

const getReservations = computed(() => (booking.value ? getReservationsForSpace(booking.value.slug) : []))

function formatDate(d: string) {
  try {
    return new Date(d + 'T00:00:00').toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  } catch (e) {
    return d
  }
}

useSeoMeta({
  title: `${booking.value?.name} | Taman Legawong`,
  ogTitle: `${booking.value?.name} | Taman Legawong`,
  description: booking.value?.description,
  ogDescription: booking.value?.description,
})
</script>

<template>
  <div>
    <UButton
      to="/booking"
      icon="i-lucide-arrow-left"
      label="Kembali ke daftar booking"
      color="neutral"
      variant="link"
      class="mb-6" />

    <div
      v-if="booking"
      class="grid gap-6 lg:gap-8 lg:grid-cols-3">
      <div class="space-y-6 lg:col-span-2">
        <UCard>
          <UPageHeader
            :title="booking.name"
            :description="booking.description"
            headline="DETAIL BOOKING" />

          <BadgeContainer class="mt-4">
            <UBadge
              color="primary"
              variant="soft">
              {{ booking.category }}
            </UBadge>
            <UBadge
              color="neutral"
              variant="soft">
              Ukuran: {{ booking.size ? `${booking.size.width} x ${booking.size.length} ${booking.size.unit || 'm'}` : '' }}
            </UBadge>
          </BadgeContainer>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted">Ketersediaan & Reservasi</h2>
          </template>
          <div class="mt-4 text-sm">
            <p class="text-muted">Ringkasan reservasi mendatang untuk lokasi ini:</p>
            <ul class="mt-3 space-y-2">
              <li v-for="r in getReservations" :key="r.id" class="flex justify-between">
                <div>
                  <div class="font-medium">{{ formatDate(r.date) }}</div>
                  <div class="text-xs text-muted">{{ r.startTime }} - {{ r.endTime }} — {{ r.bookedBy }} ({{ r.participants || '-' }} orang)</div>
                </div>
              </li>
            </ul>
            <div v-if="getReservations.length === 0" class="mt-3 text-muted">Belum ada reservasi untuk lokasi ini.</div>
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
              <ImageContainer>
                <Image
                  :src="item"
                  :alt="`Foto ${booking.name}`" />
              </ImageContainer>
            </UCarousel>

            <ImageContainer v-else>
              <Image
                v-if="booking.images && booking.images[0]"
                :src="booking.images[0]"
                :alt="`Foto ${booking.name}`" />
              <ImageEmpty v-else />
            </ImageContainer>
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted flex items-center gap-2">
              <UIcon name="i-lucide-sparkles" />
              Fasilitas & catatan
            </h2>
          </template>

          <BadgeContainer>
            <UBadge
              v-for="facility in booking.facilities"
              :key="facility"
              color="neutral"
              variant="soft">
              {{ facility }}
            </UBadge>
          </BadgeContainer>

          <div class="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <p class="text-sm font-semibold text-highlighted">Detail area</p>
              <p class="mt-1 text-sm text-muted">{{ booking.address }}</p>
            </div>
            <div>
              <p class="text-sm font-semibold text-highlighted">Jam booking</p>
              <p class="mt-1 text-sm text-muted">{{ booking.hours ? `${booking.hours.start} - ${booking.hours.end}` : '' }}</p>
            </div>
          </div>
        </UCard>
      </div>

      <div>
        <UCard>
          <template #header>
            <h2 class="text-base font-semibold text-highlighted">Ringkasan booking</h2>
          </template>

          <dl class="space-y-4 text-sm">
            <div>
              <dt class="text-muted">Harga (per 6 jam)</dt>
              <dd class="mt-1 font-medium text-highlighted">
                Rp {{ booking.pricePer6Hours.toLocaleString("id-ID") }},-
              </dd>
            </div>
            <div>
              <dt class="text-muted">Kontak pengelola</dt>
              <dd class="mt-1 font-medium text-highlighted">
                {{ booking.contact?.name }} — {{ booking.contact?.phone }}
              </dd>
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
            :to="`https://wa.me/${booking.contact?.phone.replace(/[^0-9]/g, '')}`"
            target="_blank">
            Kontak WhatsApp{{ booking.contact?.name ? ` (${booking.contact.name})` : '' }}
          </UButton>

          <UButton
            class="mt-3 w-full"
            color="neutral"
            variant="outline"
            :to="`/booking/pemesanan?space=${booking.slug}`">
            Pesan tempat ini
          </UButton>

          <p class="mt-4 text-xs leading-5 text-muted">
            Konfirmasi jadwal, jumlah tamu, dan kebutuhan tambahan sebelum datang ke lokasi.
          </p>
        
        </UCard>
      </div>
    </div>
  </div>
</template>
