<script setup lang="ts">
const router = useRouter()

const supabaseUser = useSupabaseUser()

if (supabaseUser.value) {
  router.push("/")
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <UCard class="w-full max-w-md">
      <template #header>
        <h2 class="text-xl font-semibold">Memproses...</h2>
      </template>
      <div class="flex justify-center">
        <USkeleton class="h-12 w-12 rounded-full" />
      </div>
    </UCard>
  </div>
</template>
