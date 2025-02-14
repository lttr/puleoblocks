<template>
  <div class="p-cluster">
    <button
      :class="{ active: device === 'desktop' }"
      @click="device = 'desktop'"
    >
      <Icon name="uil:desktop" />
    </button>
    <button :class="{ active: device === 'tablet' }" @click="device = 'tablet'">
      <Icon name="uil:tablet" />
    </button>
    <button :class="{ active: device === 'mobile' }" @click="device = 'mobile'">
      <Icon name="uil:mobile-android-alt" />
    </button>
  </div>
</template>

<script lang="ts" setup>
export type Device = "desktop" | "tablet" | "mobile"
const device = defineModel<Device>()
</script>

<style scoped>
.p-cluster {
  --cluster-space: var(--space-2);
}

button {
  display: inline-grid;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-1);
  box-shadow: none;
  cursor: pointer;
  opacity: 0.4;
}

.active {
  opacity: 1;
}
</style>
