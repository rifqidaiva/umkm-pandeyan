<script setup lang="ts">
import { useRoute, useRouter } from "#imports"
import { bookingSpaces, getBookingBySlug } from "~/data/booking"
import { addReservation } from "~/data/reservations"
import type { Reservation } from "~/data/reservations"
import { ref, computed } from "vue"

const route = useRoute()
const router = useRouter()
const spaceSlug = String(route.query.space || "")
const selected = computed(() => getBookingBySlug(spaceSlug) || bookingSpaces[0])

const form = ref({
  spaceSlug: selected.value?.slug || "",
  bookedBy: "",
  organization: "",
  address: "",
  date: "",
  startTime: "",
  endTime: "",
  description: "",
  participants: 0,
})

const spaceOptions = computed(() => bookingSpaces.map((s) => ({ label: s.name, value: s.slug })))

function submit() {
  if (!form.value.bookedBy || !form.value.date || !form.value.startTime || !form.value.endTime) {
    alert("Isi nama, tanggal, dan jam mulai/selesai")
    return
  }

  const res: Reservation = {
    id: "r" + Date.now(),
    spaceSlug: form.value.spaceSlug,
    bookedBy: form.value.bookedBy,
    organization: form.value.organization,
    address: form.value.address,
    date: form.value.date,
    startTime: form.value.startTime,
    endTime: form.value.endTime,
    description: form.value.description,
    participants: Number(form.value.participants) || undefined,
    createdAt: new Date().toISOString(),
  }

  addReservation(res)
  alert("Reservasi terkirim (disimpan sementara di memory).")
  router.push(`/booking/${form.value.spaceSlug}`)
}

// Prefill if space provided
if (spaceSlug && selected.value) {
  form.value.spaceSlug = selected.value.slug
}
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <UPageHeader
      title="Form Pemesanan"
      description="Isi formulir berikut untuk mengajukan pemesanan tempat."
      headline="Pemesanan" />

    <!-- 
    <UCard class="mt-6 p-6">
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-muted">Nama Pemesan</label>
          <UInput v-model="form.bookedBy" class="mt-1" placeholder="Anakaya" />
        </div>

        <div>
          <label class="block text-sm font-medium text-muted">Organisasi</label>
          <UInput v-model="form.organization" class="mt-1" placeholder="REC x BIM UGM" />
        </div>

        <div>
          <label class="block text-sm font-medium text-muted">Alamat</label>
          <UInput v-model="form.address" class="mt-1" placeholder="UGM" />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-muted">Tanggal</label>
            <UInputDate v-model="form.date" class="mt-1" />
          </div>
          <div>
            <label class="block text-sm font-medium text-muted">Jumlah peserta</label>
            <UInputNumber v-model="form.participants" class="mt-1" :min="1" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-sm font-medium text-muted">Pukul mulai</label>
            <UInputTime v-model="form.startTime" class="mt-1" />
          </div>
          <div>
            <label class="block text-sm font-medium text-muted">Pukul selesai</label>
            <UInputTime v-model="form.endTime" class="mt-1" />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-muted">Tempat</label>
          <USelect v-model="form.spaceSlug" :items="spaceOptions" class="mt-1" />
        </div>

        <div>
          <label class="block text-sm font-medium text-muted">Diskripsi acara</label>
          <UTextarea v-model="form.description" rows="4" class="mt-1" placeholder="Pengambilan sample..." />
        </div>

        <div class="flex gap-3">
          <UButton color="primary" variant="solid" @click="submit">Kirim Pemesanan</UButton>
          <UButton color="neutral" variant="outline" :to="`/booking/${form.spaceSlug}`">Batal</UButton>
        </div>
      </div>
    </UCard>
    -->
  </div>
</template>
