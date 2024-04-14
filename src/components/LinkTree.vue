<template>
  <div class="flex flex-col items-center gap-16 px-8">
    <div class="flex flex-col gap-4 items-center">
      <img :src="MyProfile" class="w-32 rounded-full" />
      <h1 class="text-xl">@rolf.zambon</h1>
      <p>
        Este é minha link tree, que foi desenvolvida com VueJS + TS, e Vite.
      </p>
    </div>
    <div class="flex flex-col items-center gap-6">
      <div class="flex flex-col gap-4 min-w-80">
        <Link href="google.com">Meu GitHub</Link>
        <Link href="google.com">Meu Twitter</Link>
      </div>
      <IconsList />
    </div>
  </div>
</template>

<script setup lang="ts">
import Link from "@/components/Link.vue";
import IconsList from "@/components/IconsList.vue";
import MyProfile from "@/assets/my-profile.jpeg";
</script>
