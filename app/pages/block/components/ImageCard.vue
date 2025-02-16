<template>
  <article class="card">
    <img :src="imageUrl" :alt="imageAlt" class="image" />
    <div class="content">
      <div class="p-flow">
        <h2 class="category">{{ category }}</h2>
        <h1 class="p-base-text-bold title">{{ title }}</h1>
        <p class="description">{{ description }}</p>
      </div>
      <footer class="footer">
        <a :href class="link">Learn More</a>
        <div class="meta">
          <Icon name="uil:eye" style="font-size: var(--font-size-0)" /><span
            class="views"
          >
            {{ views }}K
          </span>
          <Icon name="uil:comment" /><span class="comments">
            {{ comments }}
          </span>
        </div>
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  imageUrl: string
  imageAlt: string
  category: string
  title: string
  description: string
  views: number
  comments: number
  href: string
}

defineProps<Props>()
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  max-width: var(--size-content-2);
  background: var(--surface-0);
  border: var(--border-size-2) solid var(--surface-1);
  border-radius: var(--radius-2);
  overflow: hidden;
}

.image {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}

.content {
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  gap: var(--space-4);
  height: 100%;
  padding: var(--space-4);
}

.category {
  font-size: var(--font-size--2);
  color: var(--text-color-2);
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.title {
  margin-top: var(--space-1);
}

.description {
  font-size: var(--font-size--1);
  color: var(--text-color-2);
}

.footer {
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
  font-size: var(--font-size--1);
}

.link {
  color: var(--link-color);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.meta {
  display: flex;
  align-items: center;
  color: var(--text-color-2);
}

.views {
  padding-left: var(--space-1);
  padding-right: var(--space-2);
  margin-right: var(--space-2);
  border-right: var(--border-3);
}

.comments {
  padding-inline: var(--space-1);
}
</style>
