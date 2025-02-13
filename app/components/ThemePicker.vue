<template>
  <label for="color-mode">Color mode</label>
  <select id="color-mode" v-model="$colorMode.preference">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
</template>

<script lang="ts" setup></script>

<style scoped>
select {
  color: var(--gray-10);
  background-color: var(--gray-2);
  height: var(--space-5);
}
</style>
