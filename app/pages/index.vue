<template>
  <div class="min-h-screen bg-white font-sans text-neutral-dark">
    <!-- Hero Section -->
    <header class="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-6 uppercase tracking-wider">
              A rota da sua aprovação
            </span>
            <h1 class="text-5xl lg:text-7xl font-bold font-display text-neutral-dark leading-[1.1] mb-6">
              Gabarite seu <span class="text-primary italic font-black">Português</span> em qualquer concurso.
            </h1>
            <p class="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Metodologia direta, focada e eficiente para você dominar a gramática e interpretação sem enrolação. O caminho mais curto entre você e o cargo público.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-2 group">
                Quero ser aprovado
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button class="bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-200 transition-all flex items-center justify-center">
                Conhecer o método
              </button>
            </div>
            
            <div class="mt-12 flex items-center gap-4">
              <div class="flex -space-x-2">
                <div class="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">M</div>
                <div class="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold">P</div>
                <div class="w-10 h-10 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center text-[10px] font-bold">A</div>
              </div>
              <p class="text-sm text-slate-500">
                <span class="font-bold text-neutral-dark">+5.000 alunos</span> já alcançaram a aprovação.
              </p>
            </div>
          </div>
          
          <div class="mt-16 lg:mt-0 relative">
            <div class="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl transform rotate-3"></div>
            <div class="relative bg-white p-4 rounded-3xl shadow-2xl border border-secondary-200">
              <img src="/imagens/capa.png" alt="Gabaritar Português" class="rounded-2xl w-full h-auto" />
              <div class="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl shadow-xl text-white">
                <p class="text-3xl font-bold font-display">100%</p>
                <p class="text-xs uppercase tracking-widest opacity-80">Foco em Editais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
// Script setup vazio por enquanto
</script>

<style>
/* Custom styles if needed, but Tailwind is preferred */
</style>
