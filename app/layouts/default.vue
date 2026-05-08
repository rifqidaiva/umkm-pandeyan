<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const route = useRoute()
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Beranda",
    to: "/",
    icon: "i-lucide-home",
    active: route.path === "/",
  },
  {
    label: "Booking Tempat",
    to: "/booking",
    icon: "i-lucide-calendar-range",
    active: route.path.startsWith("/booking"),
  },
])
</script>

<template>
  <div>
    <UHeader mode="drawer">
      <template #title>
        <div class="flex items-center gap-3">
          <Logo />
          <div>
            <span class="block text-sm font-bold uppercase text-amber-700 dark:text-amber-500">
              Taman
            </span>
            <span class="block text-sm font-bold text-slate-900 dark:text-white uppercase">Legawong</span>
          </div>
        </div>
      </template>
      <template #right>
        <UColorModeButton />
        <div class="hidden lg:flex gap-2">
          <UButton
            to="/"
            color="neutral"
            variant="ghost">
            Beranda
          </UButton>
          <UButton
            to="/booking"
            color="neutral"
            variant="ghost">
            Booking Tempat
          </UButton>
        </div>
      </template>
      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain>
      <slot />
    </UMain>

    <UFooter class="border-t border-slate-200 dark:border-slate-800 py-6 mt-12">
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }} Taman Legawong. All rights reserved |
          KKN 84.008
          <abbr title='Universitas Pembangunan Nasional "Veteran" Yogyakarta'>UPNVY</abbr>
        </p>
      </template>
      <template #right>
        <UButton
          icon="i-simple-icons-instagram"
          color="neutral"
          variant="ghost"
          to="https://www.instagram.com/cerita.pandeyara/"
          target="_blank"
          aria-label="Instagram Taman Legawong" />
      </template>
    </UFooter>
  </div>
</template>
