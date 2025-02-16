<template>
  <div class="code-display p-container">
    <div class="code-header">
      <button class="copy-button" @click="copyCode">Copy Code</button>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="source-code" v-html="sourceCodeHighlighted"></div>
  </div>
</template>

<script setup lang="ts">
import { codeToHtml } from "shiki"

const copyCode = () => {
  navigator.clipboard.writeText(sourceCode.value)
}

const route = useRoute()
const sourceCode = ref<string>("")
const sourceCodeHighlighted = ref<string>("")

onMounted(async () => {
  try {
    const module = await import(
      `./block/components/${route.query.for}.vue?raw`
    )
    const source = module.default
    sourceCode.value = source
    sourceCodeHighlighted.value = await codeToHtml(source, {
      lang: "vue",
      themes: {
        light: "min-light",
        dark: "slack-dark",
      },
    })
  } catch (e) {
    console.error("Failed to load component source:", e)
  }
})
</script>

<style scoped>
.code-display {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
}

.source-code {
  width: 100%;
  font-family: "DM Mono", monospace;
  display: grid;
  place-items: center;
  font-size: var(--font-size--1);

  :deep(pre) {
    cursor: text;
    padding-inline: var(--space-7);
    padding-block: var(--space-2);
  }
}

:global(html.is-dark .shiki),
:global(html.is-dark .shiki span) {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  /* Optional, if you also want font styles */
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}
</style>
