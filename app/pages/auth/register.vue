<script setup lang="ts">
import type { FormSubmitEvent, AuthFormField } from "@nuxt/ui"

interface RegisterFormSchema {
  fullName: string
  email: string
  password: string
  passwordConfirm: string
}

const fields: AuthFormField[] = [
  {
    name: "fullName",
    label: "Nama Lengkap",
    type: "text",
    required: true,
  },
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
  {
    name: "passwordConfirm",
    label: "Konfirmasi Password",
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

async function onSubmit(payload: FormSubmitEvent<RegisterFormSchema>) {
  errorMessage.value = ""
  isLoading.value = true

  try {
    const { fullName, email, password, passwordConfirm } = payload.data

    if (password !== passwordConfirm) {
      errorMessage.value = "Password tidak cocok"
      isLoading.value = false
      return
    }

    if (password.length < 8) {
      errorMessage.value = "Password minimal 8 karakter"
      isLoading.value = false
      return
    }

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })

    if (signUpError) {
      errorMessage.value = "Registrasi gagal. Pastikan data yang dimasukkan benar."
      isLoading.value = false
      console.error("Registration error:", signUpError)
      return
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (signInError) {
      errorMessage.value = "Login gagal. Pastikan email dan password benar."
      isLoading.value = false
      console.error("Login error details:", signInError)
      return
    }

    const userRole = await getUserRole(email)
    const redirectPath = userRole === "admin" ? "/admin" : "/reservation"
    await router.push(redirectPath)
  } catch (error) {
    errorMessage.value = "Terjadi kesalahan. Silakan coba lagi."
    console.error("Registration error:", error)
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
        icon="i-lucide-user-plus"
        title="Daftar"
        description="Buat akun baru untuk melakukan reservasi."
        :loading="isLoading"
        :submit="{
          label: 'Daftar',
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
          Sudah punya akun?
          <ULink
            to="/auth/login"
            class="text-primary font-medium">
            Masuk di sini.
          </ULink>
        </template>
      </UAuthForm>
    </UPageCard>
  </div>
</template>
