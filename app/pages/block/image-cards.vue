<template>
  <div class="p-switcher">
    <ImageCard
      image-url="https://placehold.co/722x402"
      image-alt="Mountain peaks at sunset"
      category="Travel"
      title="Alpine Adventures"
      description="Discover breathtaking mountain views and serene landscapes. A journey through the Swiss Alps reveals nature's grandest spectacle."
      :views="2.8"
      :comments="12"
      href="#"
    />
    <ImageCard
      image-url="https://placehold.co/500x700"
      image-alt="Urban coffee shop interior"
      category="Lifestyle"
      title="Coffee Culture"
      description="Exploring the world's finest coffee shops and the art of brewing. From bean to cup, every sip tells a story."
      :views="1.5"
      :comments="8"
      href="#"
    />
    <ImageCard
      image-url="https://placehold.co/720x300"
      image-alt="Tech gadgets on a desk"
      category="Technology"
      title="Future Tech Today"
      description="The latest innovations reshaping our digital landscape. Hands-on reviews of cutting-edge gadgets and emerging technologies."
      :views="3.4"
      :comments="15"
      href="#"
    />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  code: "ImageCard",
})
</script>

<style scoped></style>
