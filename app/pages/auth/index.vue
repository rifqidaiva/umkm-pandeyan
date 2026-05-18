<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold mb-2">Taman Legawong</h1>
      <p class="text-gray-600">Sistem Reservasi Taman Legawong</p>
    </div>

    <UPageCard class="w-full max-w-md">
      <div class="flex flex-col gap-3">
        <NuxtLink to="/auth/login">
          <UButton
            size="lg"
            block
            icon="i-lucide-log-in"
            label="Masuk ke Akun"
            color="primary" />
        </NuxtLink>

        <NuxtLink to="/auth/register">
          <UButton
            size="lg"
            block
            icon="i-lucide-user-plus"
            label="Buat Akun Baru"
            color="neutral" />
        </NuxtLink>
      </div>

      <div class="mt-6 text-center text-sm text-gray-500">
        <p>atau</p>
      </div>

      <NuxtLink to="/">
        <UButton
          size="lg"
          block
          icon="i-lucide-home"
          label="Kembali ke Beranda"
          variant="ghost"
          color="neutral" />
      </NuxtLink>
    </UPageCard>
  </div>
</template>
