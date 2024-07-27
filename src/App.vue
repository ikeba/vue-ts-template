<template>
  <div>
    <div class="tw-text-amber-400">Vue Template</div>
  </div>
</template>

<script setup lang="ts">
  import { useConfigStore } from './stores/config.store.ts';

  const configStore = useConfigStore();

  console.log(`Hello world, api is ${configStore.api}`);
</script>

<style scoped></style>
