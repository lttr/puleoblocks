<template>
  <div ref="brandColorPicker" class="brand-color-picker">
    <button class="indigo" @click="chooseColor">
      <Icon v-if="currentColor === 'indigo'" name="uil:check" />
    </button>
    <button class="orange" @click="chooseColor">
      <Icon v-if="currentColor === 'orange'" name="uil:check" />
    </button>
    <button class="green" @click="chooseColor">
      <Icon v-if="currentColor === 'green'" name="uil:check" />
    </button>
    <button class="purple" @click="chooseColor">
      <Icon v-if="currentColor === 'purple'" name="uil:check" />
    </button>
    <button class="pink" @click="chooseColor">
      <Icon v-if="currentColor === 'pink'" name="uil:check" />
    </button>
    <button class="blue" @click="chooseColor">
      <Icon v-if="currentColor === 'blue'" name="uil:check" />
    </button>
  </div>
</template>

<script lang="ts" setup>
type Color = "indigo" | "orange" | "green" | "purple" | "pink" | "blue"

const INITIAL_COLOR = "indigo"
const currentColor = ref<Color>(INITIAL_COLOR)

const brandColorPicker = templateRef<HTMLDivElement>("brandColorPicker")

function chooseColor(e: Event) {
  const colorName = (e.target as HTMLButtonElement).className
  currentColor.value = colorName as Color
  refreshColor(currentColor.value)
}

function refreshColor(colorName: Color): void {
  const value = `light-dark(var(--${colorName}-6), var(--${colorName}-5))`
  document.documentElement.style.setProperty("--brand-color", value)
}
</script>

<style scoped>
.brand-color-picker {
  background-color: white;
  padding-inline: var(--space-3);
  padding-block: var(--space-1);
  border-radius: var(--radius-round);
  display: flex;
  align-items: center;
  gap: var(--space-2);

  button {
    display: inline-grid;
    border-radius: var(--radius-round);
    border: none;
    padding: 0;
    margin: 0;
    width: var(--space-4);
    height: var(--space-4);
    box-shadow: none;
    cursor: pointer;
  }
}

.indigo {
  background-color: var(--indigo);
}

.orange {
  background-color: var(--orange);
}

.green {
  background-color: var(--green);
}

.purple {
  background-color: var(--purple);
}

.pink {
  background-color: var(--pink);
}

.blue {
  background-color: var(--blue);
}
</style>
