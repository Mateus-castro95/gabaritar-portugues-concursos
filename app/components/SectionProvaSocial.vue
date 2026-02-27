<template>
  <section class="pt-10 pb-14 lg:pt-14 lg:pb-20 bg-neutral-dark relative overflow-hidden">
    <!-- Glow decorativo -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-fade-in-up">

      <!-- Texto principal -->
      <p class="text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-display leading-tight mb-6">
        Mais de
        <span class="text-primary font-black">5.000 candidatos</span>
        já utilizaram esse método para aumentar a pontuação em Português.
      </p>

      <!-- Divisor -->
      <div class="w-16 h-1 bg-primary/40 mx-auto rounded-full mb-8"></div>

      <!-- Resultados reais -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <div class="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-left">
          <span class="text-2xl mt-0.5">📈</span>
          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
            Alguns conseguiram sair de
            <span class="text-white font-bold">12 para 18 acertos</span>
            nas questões de Português.
          </p>
        </div>
        <div class="flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-left">
          <span class="text-2xl mt-0.5">💡</span>
          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
            Outros finalmente entenderam
            <span class="text-white font-bold">crase e pontuação</span>
            depois de anos tentando.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
