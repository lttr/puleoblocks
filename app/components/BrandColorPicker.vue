<template>
  <div class="brand-color-picker">
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
const colors = {
  indigo: "#4f46e5",
  orange: "#f97316",
  green: "#16a34a",
  purple: "#9333ea",
  pink: "#e11d48",
  blue: "#2563eb",
}

const INITIAL_COLOR = "indigo"

const currentColor = ref<keyof typeof colors>(INITIAL_COLOR)

function chooseColor(e: Event) {
  const colorName = (e.target as HTMLButtonElement).className
  currentColor.value = colorName as keyof typeof colors

  const colorValue = colors[colorName as keyof typeof colors]
  document.documentElement.style.setProperty("--brand-color", colorValue)
}

onMounted(() => {
  document.documentElement.style.setProperty("--brand-color", INITIAL_COLOR)
})
</script>

<style scoped>
.brand-color-picker {
  --indigo-6: #4f46e5;
  --orange-6: #f97316;
  --green-6: #16a34a;
  --purple-6: #9333ea;
  --pink-6: #e11d48;
  --blue-6: #2563eb;

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
  background-color: var(--indigo-6);
}

.orange {
  background-color: var(--orange-6);
}

.green {
  background-color: var(--green-6);
}

.purple {
  background-color: var(--purple-6);
}

.pink {
  background-color: var(--pink-6);
}

.blue {
  background-color: var(--blue-6);
}
</style>
