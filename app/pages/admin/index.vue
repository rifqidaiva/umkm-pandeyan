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
          <h1 class="text-2xl font-bold">Admin Dashboard</h1>
          <UBadge color="primary"> Administrator </UBadge>
        </div>
      </template>

      <div class="space-y-4">
        <p class="text-gray-600">
          Selamat datang di dashboard administrator. Di sini Anda dapat mengelola reservasi taman,
          melihat laporan, dan melakukan tugas administratif lainnya.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UCard class="bg-blue-50 dark:bg-blue-900/20">
            <template #header>
              <h3 class="font-semibold flex items-center gap-2">
                <UIcon name="i-lucide-calendar" />
                Total Reservasi
              </h3>
            </template>
            <p class="text-3xl font-bold">0</p>
            <p class="text-sm text-gray-500 mt-2">Reservasi bulan ini</p>
          </UCard>

          <UCard class="bg-green-50 dark:bg-green-900/20">
            <template #header>
              <h3 class="font-semibold flex items-center gap-2">
                <UIcon name="i-lucide-users" />
                Total Customer
              </h3>
            </template>
            <p class="text-3xl font-bold">0</p>
            <p class="text-sm text-gray-500 mt-2">User terdaftar</p>
          </UCard>
        </div>

        <div class="pt-4 border-t">
          <h3 class="font-semibold mb-3">Menu Admin</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <UButton
              block
              color="neutral"
              variant="ghost"
              icon="i-lucide-calendar-range"
              label="Kelola Reservasi" />
            <UButton
              block
              color="neutral"
              variant="ghost"
              icon="i-lucide-users"
              label="Kelola Customer" />
            <UButton
              block
              color="neutral"
              variant="ghost"
              icon="i-lucide-bar-chart-2"
              label="Laporan" />
            <UButton
              block
              color="neutral"
              variant="ghost"
              icon="i-lucide-settings"
              label="Pengaturan" />
          </div>
        </div>
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
          <p class="font-medium">Administrator</p>
        </div>
      </div>
    </UCard>
  </div>
</template>
