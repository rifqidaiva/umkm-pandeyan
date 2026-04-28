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
    label: "Daftar UMKM",
    to: "/umkm",
    icon: "i-lucide-store",
    active: route.path.startsWith("/umkm"),
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
              Pandeyan
            </span>
            <span class="block text-sm font-bold text-slate-900 dark:text-white">Katalog UMKM</span>
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
            to="/umkm"
            color="neutral"
            variant="ghost">
            Daftar UMKM
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
          Copyright © {{ new Date().getFullYear() }} Katalog UMKM Pandeyan. All rights reserved |
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
          aria-label="Instagram UMKM Pandeyan" />
      </template>
    </UFooter>
  </div>
</template>
