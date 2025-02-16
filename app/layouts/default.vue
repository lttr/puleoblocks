<template>
  <div>
    <header>
      <div class="p-cluster">
        <button @click="() => toggleNav()"><Icon name="uil:bars" /></button>
        <NuxtLink to="/" class="home"><h1>PuleoBlocks</h1></NuxtLink>
      </div>
      <div class="p-cluster">
        <ViewCodeButton class="view-code" />
        <BrandColorPicker class="brand-color-picker" />
        <DevicePicker v-model="device" class="device-picker" />
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

.p-cluster {
  --cluster-space: var(--space-4);
}

.device-picker {
  @media (--md-n-below) {
    display: none;
  }
}

:is(.brand-color-picker, .view-code) {
  @media (--md-n-below) {
    display: none;
  }
}
</style>
