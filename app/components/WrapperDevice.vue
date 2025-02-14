<template>
  <main class="p-container">
    <div v-if="device === 'tablet'" class="tablet-wrapper">
      <div class="tablet p-container">
        <slot></slot>
      </div>
    </div>
    <div v-if="device === 'mobile'" class="mobile-wrapper">
      <div class="mobile p-container">
        <slot></slot>
      </div>
    </div>
    <template v-if="device === 'desktop'">
      <slot></slot>
    </template>
  </main>
</template>

<script lang="ts" setup>
import type { Device } from "./DevicePicker.vue"
defineProps<{ device: Device }>()
</script>

<style scoped>
.tablet-wrapper {
  background-color: var(--surface-2);
  border-radius: var(--radius-4);
  padding: var(--space-7) var(--space-6);
  border: var(--border-size-2) solid var(--surface-3);
}

.tablet {
  max-width: 720px;
  max-height: 1200px;
  overflow-y: auto;
  border: var(--border-size-2) solid var(--surface-3);
  background-color: var(--bg-color-body);
  padding-block: var(--space-6);
}

.mobile-wrapper {
  background-color: var(--surface-2);
  border-radius: var(--radius-3);
  padding: var(--space-7) var(--space-3);
  border: var(--border-size-2) solid var(--surface-3);
}

.mobile {
  max-width: 460px;
  max-height: 1200px;
  overflow-y: auto;
  border: var(--border-size-1) solid var(--surface-3);
  background-color: var(--bg-color-body);
  padding-block: var(--space-6);
}
</style>
