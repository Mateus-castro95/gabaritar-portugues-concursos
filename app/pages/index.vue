<template>
  <div class="min-h-screen bg-white font-sans text-neutral-dark selection:bg-primary selection:text-white overflow-x-hidden">
    <SectionHero />
    <SectionBeneficios />
    <SectionProvaSocial />
    <SectionDepoimentos />
    <SectionPlanos />
    <SectionFAQ />
    <TheFooter />
    <ScrollToTop />
  </div>
</template>

<script setup>
// Page is 100% componentized
</script>

<style>
/* Global styles for the landing page */
html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
}
</style>
