<template>
  <div>
    <header>
      <div class="p-cluster">
        <button @click="() => toggleNav()"><Icon name="uil:bars" /></button>
        <NuxtLink to="/" class="home"><h1>PuleoBlocks</h1></NuxtLink>
      </div>
      <div class="p-cluster">
        <NuxtLink class="view-code" :to="viewCodeUrl"
          ><Icon name="uil:code" />View code</NuxtLink
        >
        <BrandColorPicker />
        <DevicePicker v-model="device" />
        <ThemePicker />
      </div>
    </header>
    <div class="wrapper">
      <MainNavigation :is-nav-open class="nav" />
      <WrapperDevice :device>
        <slot></slot>
      </WrapperDevice>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Device } from "~/components/DevicePicker.vue"

const [isNavOpen, toggleNav] = useToggle(false)
const device = ref<Device>("desktop")

const route = useRoute()
const viewCodeUrl = computed(() => `view-code?for=${route.meta.code}`)
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gray-1);
  padding: var(--space-2) var(--space-3);
  background-color: var(--brand-color);
  height: 3.5rem;
}

.home {
  color: var(--gray-1);
}

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

  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
}

button {
  background-color: transparent;
  border: none;
  box-shadow: none;
  height: initial;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-1);
}

h1 {
  font-size: var(--font-size-0);
}

.wrapper {
  display: flex;
}

main {
  width: 100%;
  min-height: calc(100vh - 3.5rem);
  overflow-y: auto;
  padding-block: var(--space-5);
  display: grid;
  place-items: center;
}
</style>
