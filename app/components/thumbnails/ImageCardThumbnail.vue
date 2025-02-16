<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 300">
    <!-- Card Container -->
    <rect
      x="20"
      y="20"
      width="200"
      height="260"
      rx="8"
      fill="var(--surface-0)"
      stroke="var(--gray-2)"
      stroke-width="2"
    />

    <!-- Image Area -->
    <rect x="20" y="20" width="200" height="120" rx="8" fill="var(--gray-1)" />
    <path d="M120 50 L150 90 L90 90 Z" fill="var(--gray-5)" />
    <circle cx="160" cy="60" r="12" fill="var(--gray-5)" />

    <!-- Category Text -->
    <rect x="40" y="160" width="80" height="12" rx="2" fill="var(--gray-5)" />

    <!-- Title -->
    <rect x="40" y="185" width="160" height="16" rx="2" fill="var(--gray-7)" />

    <!-- Description Lines -->
    <rect x="40" y="215" width="160" height="8" rx="2" fill="var(--gray-4)" />
    <rect x="40" y="230" width="140" height="8" rx="2" fill="var(--gray-4)" />

    <!-- Footer -->
    <rect
      x="40"
      y="255"
      width="60"
      height="12"
      rx="2"
      fill="var(--accent-color)"
    />

    <!-- Metadata Icons -->
    <g transform="translate(160, 255)">
      <rect width="12" height="12" rx="2" fill="var(--gray-5)" />
      <rect x="20" width="12" height="12" rx="2" fill="var(--gray-5)" />
    </g>
  </svg>
</template>
