<template>
  <div>
    <header>
      <div class="p-cluster">
        <button @click="() => toggleNav()"><Icon name="uil:bars" /></button>
        <h1>PuleoBlocks</h1>
      </div>
      <div class="p-cluster">
        <BrandColorPicker />
        <ThemePicker />
      </div>
    </header>
    <div class="wrapper">
      <MainNavigation :is-nav-open class="nav" />
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
const [isNavOpen, toggleNav] = useToggle(false)
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
}
</style>
