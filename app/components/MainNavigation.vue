<template>
  <nav class="navigation p-stack" :class="{ open: isNavOpen }">
    <div>a</div>
    <div>a</div>
    <div>a</div>
    <div>a</div>
  </nav>
</template>

<script lang="ts" setup>
const { isNavOpen } = defineProps<{ isNavOpen: boolean }>()
</script>

<style scoped>
.navigation {
  background-color: white;
  height: calc(100vh - 3.5rem);
  width: 12ch;
  margin-left: -12ch;
  transition: margin 0.15s ease-in-out;
  overflow-y: auto;

  div {
    background-color: var(--surface-4);
    width: var(--space-7);
    height: var(--space-7);
  }
}

.open {
  margin-left: 0;
}
</style>
