<script setup lang="ts">
const user = useSupabaseUser()
const router = useRouter()

onMounted(() => {
  if (!user.value) {
    router.push("/auth/login")
  }
})
</script>

<template>
  <div v-if="user" class="space-y-6">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold">Reservasi Taman Legawong</h1>
          <UBadge color="neutral"> Customer </UBadge>
        </div>
      </template>

      <div class="space-y-4">
        <p class="text-gray-600">
          Halaman ini memungkinkan Anda untuk membuat dan mengelola reservasi di Taman Legawong.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UCard class="bg-amber-50 dark:bg-amber-900/20">
            <template #header>
              <h3 class="font-semibold flex items-center gap-2">
                <UIcon name="i-lucide-calendar" />
                Reservasi Aktif
              </h3>
            </template>
            <p class="text-3xl font-bold">0</p>
            <p class="text-sm text-gray-500 mt-2">Reservasi Anda yang aktif</p>
          </UCard>

          <UCard class="bg-blue-50 dark:bg-blue-900/20">
            <template #header>
              <h3 class="font-semibold flex items-center gap-2">
                <UIcon name="i-lucide-history" />
                Riwayat Reservasi
              </h3>
            </template>
            <p class="text-3xl font-bold">0</p>
            <p class="text-sm text-gray-500 mt-2">Total reservasi sebelumnya</p>
          </UCard>
        </div>

        <div class="pt-4 border-t">
          <h3 class="font-semibold mb-3">Aksi</h3>
          <UButton
            block
            color="neutral"
            icon="i-lucide-plus"
            label="Buat Reservasi Baru" />
        </div>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h3 class="font-semibold">Daftar Reservasi</h3>
      </template>
      <div class="text-center py-8 text-gray-500">
        <p>Belum ada reservasi. Buat reservasi baru untuk memulai.</p>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <h3 class="font-semibold">Informasi Akun</h3>
      </template>
      <div class="space-y-2 text-sm">
        <div>
          <p class="text-gray-500">Email</p>
          <p class="font-medium">{{ user.email }}</p>
        </div>
        <div>
          <p class="text-gray-500">Role</p>
          <p class="font-medium">Customer</p>
        </div>
      </div>
    </UCard>
  </div>
</template>
