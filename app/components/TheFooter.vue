<template>
  <footer class="bg-neutral-dark py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-slate-400 text-sm font-medium">
        © {{ currentYear }} Gabaritar Português. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
