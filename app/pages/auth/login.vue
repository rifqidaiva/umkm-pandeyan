<script setup lang="ts">
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui"

interface LoginFormSchema {
  email: string
  password: string
}

const fields: AuthFormField[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
  },
]

const supabase = useSupabaseClient()
const router = useRouter()
const isLoading = ref(false)
const errorMessage = ref("")

async function getUserRole(userEmail: string): Promise<"admin" | "customer"> {
  // Placeholder: Check if email contains 'admin'
  if (userEmail.includes("admin")) {
    return "admin"
  }
  return "customer"
}

async function onSubmit(payload: FormSubmitEvent<LoginFormSchema>) {
  errorMessage.value = ""
  isLoading.value = true

  try {
    const config = useRuntimeConfig()
    console.log("Supabase URL:", config.public.supabaseUrl)
    console.log("Attempting login with:", payload.data.email)

    const { data, error } = await supabase.auth.signInWithPassword({
      email: payload.data.email,
      password: payload.data.password,
    })

    if (error) {
      errorMessage.value = "Login gagal. Pastikan email dan password benar."
      isLoading.value = false
      console.error("Login error details:", error)
      return
    }

    if (data?.session) {
      const userRole = await getUserRole(payload.data.email)
      const redirectPath = userRole === "admin" ? "/admin" : "/reservation"
      await router.push(redirectPath)
    }
  } catch (error) {
    errorMessage.value = "Terjadi kesalahan. Silakan coba lagi."
    console.error("Login error:", error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :fields="fields"
        icon="i-lucide-user"
        title="Masuk"
        description="Silakan masuk untuk melanjutkan reservasi."
        :loading="isLoading"
        :submit="{
          label: 'Masuk',
        }"
        @submit="onSubmit">
        <template #validation>
          <UAlert
            v-if="errorMessage"
            color="error"
            icon="i-lucide-alert-circle"
            :title="errorMessage" />
        </template>
        <template #footer>
          Belum punya akun?
          <ULink
            to="/auth/register"
            class="text-primary font-medium">
            Daftar di sini.
          </ULink>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
