<template>
  <section id="beneficios" class="py-16 lg:py-24 bg-white relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[150px] -z-10"></div>
    <div class="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-12 lg:mb-16 animate-fade-in-up">
        <span class="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">O que você vai aprender</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-dark mb-6 tracking-tight">
          Direto ao ponto. <span class="text-primary">Só o que cai.</span>
        </h2>
        <div class="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
      </div>

      <!-- Cards: 2x2 mobile, 4 colunas desktop -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

        <!-- Card 1 -->
        <div class="group relative flex flex-col rounded-3xl p-5 sm:p-7 border-2 border-primary/10 bg-gradient-to-br from-blue-50 to-indigo-50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-500 animate-fade-in-up" style="animation-delay: 0s;">
          <!-- Ícone no topo -->
          <div class="mb-4 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-primary flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            📌
          </div>
          <h3 class="font-display font-black text-sm sm:text-base lg:text-lg text-neutral-dark mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
            As 37 regras que realmente caem em concursos
          </h3>
          <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Nada de estudar livro inteiro. Você aprende apenas o que as bancas realmente cobram.
          </p>
          <!-- Borda de destaque no hover -->
          <div class="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
        </div>

        <!-- Card 2 -->
        <div class="group relative flex flex-col rounded-3xl p-5 sm:p-7 border-2 border-primary/10 bg-gradient-to-br from-indigo-50 to-blue-50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-500 animate-fade-in-up" style="animation-delay: 0.1s;">
          <div class="mb-4 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-primary flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            📌
          </div>
          <h3 class="font-display font-black text-sm sm:text-base lg:text-lg text-neutral-dark mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
            Checklist das pegadinhas clássicas
          </h3>
          <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Evite os erros que eliminam milhares de candidatos todos os anos.
          </p>
          <div class="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
        </div>

        <!-- Card 3 -->
        <div class="group relative flex flex-col rounded-3xl p-5 sm:p-7 border-2 border-primary/10 bg-gradient-to-br from-blue-50 to-sky-50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-500 animate-fade-in-up" style="animation-delay: 0.2s;">
          <div class="mb-4 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-primary flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            📌
          </div>
          <h3 class="font-display font-black text-sm sm:text-base lg:text-lg text-neutral-dark mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
            Método de eliminação prática
          </h3>
          <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Mesmo em dúvida, você aumenta drasticamente suas chances de acertar.
          </p>
          <div class="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
        </div>

        <!-- Card 4 -->
        <div class="group relative flex flex-col rounded-3xl p-5 sm:p-7 border-2 border-primary/10 bg-gradient-to-br from-sky-50 to-indigo-50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-500 animate-fade-in-up" style="animation-delay: 0.3s;">
          <div class="mb-4 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-primary flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            📌
          </div>
          <h3 class="font-display font-black text-sm sm:text-base lg:text-lg text-neutral-dark mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
            Estratégia para ganhar pontos rápidos
          </h3>
          <p class="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Descubra como garantir acertos mesmo sem dominar 100% da matéria.
          </p>
          <div class="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
        </div>

      </div>

      <!-- CTA -->
      <div class="mt-14 flex justify-center px-4 animate-fade-in-up" style="animation-delay: 500ms;">
        <BaseButton
          size="xl"
          rounded="2xl"
          class="shadow-2xl shadow-primary/30 w-full sm:w-auto min-w-[300px]"
          @click="scrollToPlanos"
        >
          QUERO PARAR DE PERDER PONTOS
          <template #right-icon>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </template>
        </BaseButton>
      </div>

    </div>
  </section>
</template>

<script setup>
const scrollToPlanos = () => {
  const el = document.getElementById('planos');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
</script>

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
