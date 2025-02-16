<template>
  <ClientOnly>
    <button
      type="button"
      class="switcher"
      :class="$colorMode.value"
      :aria-label="`Switch to ${$colorMode.value === 'light' ? 'dark' : 'light'} mode`"
      @click="toggle"
    >
      <div class="track">
        <div class="thumb"></div>
        <Icon
          name="uil:moon"
          aria-hidden="true"
          class="icon moon"
          :class="{
            initial: $colorMode.value === 'dark',
          }"
        />
        <Icon
          name="uil:sun"
          aria-hidden="true"
          class="icon sun"
          :class="{ initial: $colorMode.value === 'light' }"
        />
      </div>
    </button>
    <template #fallback>
      <button class="switcher"></button>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

function toggle() {
  colorMode.preference = colorMode.value !== "dark" ? "dark" : "light"
}
</script>

<style scoped>
.switcher {
  --size: 2rem;
  --icon-size: 1.25rem;

  width: calc(var(--size) * 2);
  height: var(--size);
  border-radius: calc(var(--size) / 2);
  border: none;
  padding-block: 0;
  padding-inline: var(--space-1);
  background: color-mix(in srgb, var(--text-color-1-inverse) 40%, transparent);
  cursor: pointer;
  transition: background-color 0.25s var(--ease-3);
}

.icon {
  font-size: 1.2rem;
  opacity: 0;
  transition: opacity 0.43s var(--ease-3);
  pointer-events: none;

  &.sun {
    justify-self: start;
    opacity: 0;
    transform: translateX(-3px);
  }

  &.moon {
    justify-self: end;
    opacity: 0;
    transform: translateX(3px);
  }

  &.initial {
    opacity: 1;
  }
}

.dark .icon.moon {
  opacity: 0.8;
}

.light .icon.sun {
  opacity: 0.8;
}

.track {
  display: grid;
  align-items: center;
  width: calc(100% - 2 * var(--space-1));

  > * {
    grid-area: 1 / 1;
  }
}

.thumb {
  width: calc(var(--size) - 0.6rem);
  height: calc(var(--size) - 0.6rem);
  border-radius: var(--radius-round);
  background: var(--brand-color);
  transform: translateX(0);
  transition: transform 0.25s var(--ease-3);
}

.light .thumb {
  transform: translateX(100%);
  background: var(--brand-color);
}
</style>
