<template>
  <svg class="block" aria-hidden="true">
    <use :href="symbolId" fill="currentColor" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

export interface Props {
  name: string;
}
const props = defineProps<Props>();
const symbolId = computed(() => `#icon-${props.name}`);
</script>
