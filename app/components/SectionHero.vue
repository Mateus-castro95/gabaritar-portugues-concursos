<template>
  <header
   class="relative pt-10 pb-12 lg:pt-32 lg:pb-24">
    <!-- Background Decorations -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-30 pointer-events-none">
      <div class="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
        <!-- Text Content -->
        <div class="text-center lg:text-left flex flex-col items-center lg:items-start animate-fade-in-up">
          <span class="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary mb-6 uppercase tracking-[0.25em] shadow-sm border border-primary/5">
            <span class="w-2 h-2 bg-primary rounded-full mr-2 animate-ping"></span>
            A rota da sua aprovação
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-8xl font-bold font-display text-neutral-dark leading-[1] mb-6 tracking-tighter">
            Gabarite seu <br class="hidden lg:block" /><span class="text-primary font-black relative px-1 inline-block">
              Português
              <svg class="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,7 C30,7 70,1 100,1" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round" />
              </svg>
            </span> em qualquer concurso.
          </h1>
          <p class="text-base sm:text-lg text-slate-500 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-90">
            Metodologia direta, focada e eficiente para você dominar a gramática e interpretação sem enrolação. O caminho mais curto entre você e o cargo público.
          </p>
          <div class="hidden lg:flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <BaseButton 
              size="xl" 
              rounded="2xl"
              class="shadow-2xl shadow-primary/30"
              @click="scrollToPlanos"
            >
              Quero ser aprovado
              <template #right-icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </template>
            </BaseButton>
          </div>
          
          <div class="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
            <div class="flex -space-x-4">
              <div v-for="i in 3" :key="i" class="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center shadow-md overflow-hidden">
                <img :src="`https://i.pravatar.cc/100?u=${i+10}`" alt="Avatar aluno" class="w-full h-full object-cover" />
              </div>
              <div class="w-12 h-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-[10px] font-bold shadow-md text-white">
                +5k
              </div>
            </div>
            <p class="text-sm sm:text-base text-slate-500">
              <span class="font-bold text-neutral-dark text-lg">+5.000 alunos</span> já alcançaram a aprovação.
            </p>
          </div>
        </div>
        
        <!-- Image Content -->
        <div class="mt-12 lg:mt-0 relative px-4 sm:px-0 animate-fade-in-right">
          <div class="absolute -inset-10 bg-primary/10 rounded-[60px] blur-[80px] transform rotate-6 animate-pulse"></div>
          
          <!-- Main Card -->
          <div class="relative bg-white p-3 sm:p-6 rounded-[3rem] shadow-[0_32px_100px_-20px_rgba(0,0,0,0.15)] border border-neutral-100 group animate-float">
            <div class="overflow-hidden rounded-[2.2rem] bg-slate-50 border border-neutral-100">
              <img src="/imagens/capa.png" alt="Gabaritar Português" class="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
            </div>
            
            <!-- Badge -->
            <div class="absolute -bottom-8 -left-2 sm:-left-12 bg-primary p-6 sm:p-9 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl text-white transform-gpu -rotate-6 group-hover:-rotate-3 transition-transform duration-500">
              <div class="relative">
                <p class="text-4xl sm:text-6xl font-black font-display leading-[0.8]">100%</p>
                <p class="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-black opacity-80 mt-3 block whitespace-nowrap">Foco em Editais</p>
              </div>
            </div>

            <!-- Decorative element -->
            <div class="absolute -top-10 -right-10 w-24 h-24 bg-warning/20 rounded-full blur-2xl animate-pulse"></div>
          </div>

          <!-- Mobile Action Button -->
          <div class="mt-14 flex lg:hidden justify-center animate-fade-in-up">
            <BaseButton 
              size="xl" 
              rounded="2xl"
              class="shadow-2xl shadow-primary/30 w-full"
              @click="scrollToPlanos"
            >
              Quero ser aprovado
              <template #right-icon>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </template>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const scrollToPlanos = () => {
  const el = document.getElementById('planos');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(-50%); }
  50% { transform: translateY(calc(-50% - 15px)); }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-right {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 7s ease-in-out infinite;
  animation-delay: 1.5s;
}

.animate-fade-in-up {
  animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in-right {
  animation: fade-in-right 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
  opacity: 0;
}
</style>
