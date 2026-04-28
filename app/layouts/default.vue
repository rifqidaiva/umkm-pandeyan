<template>
  <div
    class="min-h-screen text-slate-900">
    <header class="sticky top-0 z-20 border-b border-white/60 bg-white/75 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <NuxtLink
          to="/"
          class="flex items-center gap-3 font-semibold text-slate-950">
          <span
            class="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm text-white">
            UP
          </span>
          <span>
            <span class="block text-sm uppercase tracking-[0.24em] text-amber-700">Pandeyan</span>
            <span class="block text-base">Katalog UMKM</span>
          </span>
        </NuxtLink>

        <nav class="flex items-center gap-2 text-sm font-medium text-slate-600">
          <NuxtLink
            to="/"
            class="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950">
            Home
          </NuxtLink>
          <NuxtLink
            to="/umkm"
            class="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-950">
            Daftar UMKM
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="border-t border-slate-200/80 bg-white/70">
      <div
        class="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 sm:px-8 lg:px-10 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright &copy; {{ new Date().getFullYear() }} Katalog UMKM Pandeyan. All rights reserved | KKN 84.008 UPNVY</p>
        <p>Media Sosial</p>
      </div>
    </footer>
  </div>
</template>
