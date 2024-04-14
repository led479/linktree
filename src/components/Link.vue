<template>
  <a
    :href="href"
    target="_blank"
    class="flex items-center justify-center gap-2 px-3 py-2 border rounded-full bg-neutral-200 text-black"
    ><slot
  /></a>
</template>

<script setup lang="ts">
export interface Props {
  href: string;
}

defineProps<Props>();
</script>
