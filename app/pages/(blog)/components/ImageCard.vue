<template>
  <article class="card">
    <img :src="imageUrl" :alt="imageAlt" class="image" />

    <div class="content">
      <div class="category">{{ category }}</div>
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>

      <footer class="footer">
        <a v-if="href" :href="href" class="link"> Learn More </a>

        <div class="meta">
          <span v-if="views" class="views">
            {{ views }}
          </span>
          <span v-if="comments" class="comments">
            {{ comments }}
          </span>
        </div>
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  imageUrl?: string
  imageAlt?: string
  category?: string
  title: string
  description: string
  views?: number
  comments?: number
  href?: string
}

defineProps<Props>()
</script>

<style scoped>
.card {
  border-radius: var(--radius-2);
  background: var(--surface-1);
  overflow: hidden;
  transition: transform 0.2s var(--ease-3);
}

.card:hover {
  transform: translateY(-2px);
}

.image {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  background: var(--surface-2);
}

.content {
  padding: var(--space-4);
}

.category {
  font-size: var(--font-size--2);
  color: var(--text-color-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-block-end: var(--space-2);
}

.title {
  font-size: var(--font-size-1);
  margin-block-end: var(--space-2);
}

.description {
  font-size: var(--font-size--1);
  color: var(--text-color-2);
  margin-block-end: var(--space-4);
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
}

.link {
  color: var(--link-color);
  font-size: var(--font-size--1);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.meta {
  display: flex;
  gap: var(--space-3);
  color: var(--text-color-2);
  font-size: var(--font-size--1);
}
</style>
