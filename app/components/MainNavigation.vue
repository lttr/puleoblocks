<template>
  <nav class="navigation p-stack" :class="{ open: isNavOpen }">
    <ViewCodeButton class="view-code" />
    <div class="brand-color-picker">
      <BrandColorPicker />
    </div>
    <div v-for="route of blockRoutes" :key="route.name" class="p-stack">
      <NuxtLink :to="route.path" class="link p-center">
        <div class="thumbnail">
          <component :is="`${route.meta.code}Thumbnail`" />
        </div>
        {{ route.meta.code }}</NuxtLink
      >
    </div>
  </nav>
</template>

<script lang="ts" setup>
const { isNavOpen } = defineProps<{
  isNavOpen: boolean
}>()

const router = useRouter()
const blockRoutes = computed(() =>
  router.getRoutes().filter((route) => {
    if (typeof route.name !== "string") {
      return false
    } else {
      return route.name.startsWith("block")
    }
  }),
)
</script>

<style scoped>
.navigation {
  background-color: white;
  height: calc(100vh - 3.5rem);
  width: 14ch;
  margin-left: -14ch;
  transition: margin 0.15s ease-in-out;
  overflow-y: auto;
  box-shadow: var(--shadow-4);
  background-color: var(--surface-2);
  padding: var(--space-3);
}

.open {
  margin-left: 0;
}

.link {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  font-size: var(--font-size--1);
  color: var(--text-color-2);
  width: 100%;
}

.thumbnail {
  display: grid;
  place-items: center;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: var(--surface-0);
  box-shadow: var(--shadow-4);
  border-radius: var(--radius-2);
  border: var(--border-size-2) solid transparent;

  .router-link-active & {
    border: var(--border-size-2) solid var(--brand-color);
  }

  > * {
    height: 100%;
    width: auto;
  }
}

.view-code {
  color: var(--text-color-2);
  border-color: var(--text-color-2);
}

.brand-color-picker {
  flex-wrap: wrap;
}

:is(.brand-color-picker, .view-code) {
  @media (--md-n-above) {
    display: none;
  }
}
</style>
