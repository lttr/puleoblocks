<template>
  <div>
    <header>
      <div>
        <Navigation />
      </div>
      <div class="p-cluster">
        <BrandColorPicker />
        <ThemePicker />
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) var(--space-5);
  background-color: var(--brand-color);
}
</style>
