<template>
  <NuxtLink class="view-code" :to="viewCodeUrl"
    ><Icon name="uil:code" />View code</NuxtLink
  >
</template>

<script lang="ts" setup>
const route = useRoute()
const viewCodeUrl = computed(() => `/view-code?for=${route.meta.code}`)
</script>

<style scoped>
.view-code {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  border: var(--border-size-1) solid var(--gray-1);
  border-radius: var(--radius-round);
  color: var(--gray-1);
  font-size: var(--font-size--1);
  padding-inline: var(--space-2);
  padding-block: 2px;
  font-weight: var(--font-weight-6);
  white-space: nowrap;

  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
}
</style>
