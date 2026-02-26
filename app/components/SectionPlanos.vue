<template>
  <section id="planos" class="pt-12 pb-24 sm:py-24 bg-white relative overflow-hidden">
    <!-- Background patterns -->
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-dark mb-6 tracking-tight">
          Escolha a Melhor Opção Para Sua <span class="text-primary">Aprovação</span>
        </h2>
        <p class="text-slate-500 max-w-2xl mx-auto text-lg">
          Comece hoje a melhorar sua pontuação em português.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
        <!-- PLANO ESSENCIAL -->
        <div class="animate-fade-in-up flex flex-col h-full rounded-3xl bg-slate-800 p-6 border border-slate-700 shadow-2xl shadow-slate-900/30" style="animation-delay: 200ms;">
          <!-- Icon -->
          <div class="mb-5 w-12 h-12 rounded-2xl bg-slate-700 border border-slate-600 flex items-center justify-center text-2xl shadow-inner">
            📘
          </div>

          <h3 class="font-display font-bold text-xl text-white mb-2">Essencial Português</h3>
          <p class="text-sm text-slate-400 leading-relaxed mb-8">Ideal para quem quer melhorar rapidamente em português</p>

          <div class="flex-grow">
            <ul class="space-y-4">
              <li v-for="(item, i) in essencialFeatures" :key="i" class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span class="text-slate-300 text-sm font-medium leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-10 pt-8 border-t border-slate-700">
            <div class="mb-4">
              <span class="text-slate-500 line-through text-sm">De R$ 47,00</span>
              <div class="flex items-baseline gap-1 mt-1">
                <span class="text-slate-400 text-sm font-medium">Por apenas:</span>
                <span class="text-3xl font-black text-white">R$ 15,90</span>
              </div>
            </div>

            <a
              href="https://checkout.topvendas.site/VCCL1O8SCTOB"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full py-4 text-center text-base font-bold rounded-2xl border-2 border-slate-500 text-slate-200 hover:border-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300"
            >
              👉 QUERO O ESSENCIAL
            </a>
          </div>
        </div>

        <!-- PLANO COMPLETO (RECOMENDADO) -->
        <div class="relative group h-full animate-fade-in-up" style="animation-delay: 400ms;">
          <!-- Recommended Badge -->
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <span class="bg-warning text-neutral-dark text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg border-2 border-white whitespace-nowrap">
              MELHOR CUSTO-BENEFÍCIO
            </span>
          </div>

          <!-- Glow effect -->
          <div class="absolute -inset-1 bg-gradient-to-br from-primary via-primary/80 to-blue-400 rounded-[28px] blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

          <div class="relative flex flex-col h-full rounded-3xl p-6 border border-primary/30 shadow-2xl overflow-hidden"
            style="background: linear-gradient(145deg, #1a3a7c 0%, #1e4db7 40%, #2563eb 100%);"
          >
            <!-- Inner light effect -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none"></div>

            <!-- Icon -->
            <div class="mb-5 w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl shadow-inner backdrop-blur-sm">
              🚀
            </div>

            <h3 class="font-display font-bold text-xl text-white mb-2">Português Completo para Concursos</h3>
            <p class="text-sm text-blue-200 leading-relaxed mb-8">Tudo que você precisa para dominar português nas provas</p>

            <div class="flex-grow">
              <ul class="space-y-4">
                <li v-for="(item, i) in completoFeatures" :key="i" class="flex items-start gap-3">
                  <span class="text-emerald-300 mt-1 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span class="text-white text-sm font-semibold leading-relaxed">{{ item }}</span>
                </li>
              </ul>

              <!-- Psychological Bonus -->
              <div class="mt-6 p-4 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-sm">
                <p class="text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2">
                  <span>🔥</span> Economize e leve os dois materiais juntos
                </p>
              </div>
            </div>

            <div class="mt-10 pt-8 border-t border-white/15">
              <div class="mb-4 text-center">
                <span class="text-blue-300 line-through text-sm">De R$ 79,00</span>
                <div class="flex items-center justify-center gap-1 mt-1">
                  <span class="text-blue-200 text-sm font-medium">Por apenas:</span>
                  <span class="text-5xl font-black text-white drop-shadow-lg">R$ 19,90</span>
                </div>
              </div>

              <a
                href="https://checkout.topvendas.site/VCCL1O8SCTOC"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full py-5 text-center text-lg sm:text-xl font-black rounded-2xl bg-white text-primary shadow-2xl hover:bg-blue-50 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                👉 QUERO O PACOTE COMPLETO
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Secure Payment & Guarantee Note -->
      <div class="mt-16 text-center max-w-2xl mx-auto">
        <!-- Guarantee Bloc -->
        <div class="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col sm:flex-row items-center gap-6 mb-12 animate-fade-in-up" style="animation-delay: 600ms;">
          <div class="w-20 h-20 flex-shrink-0 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-4xl transform -rotate-6">
            🛡️
          </div>
          <div class="text-left">
            <h4 class="text-neutral-dark font-bold text-lg mb-1">Você tem 7 dias de garantia incondicional</h4>
            <p class="text-slate-500 text-sm leading-relaxed font-medium">
              Se por qualquer motivo você não gostar do material, basta nos enviar um e-mail e <span class="text-primary font-bold">devolvemos 100% do seu dinheiro</span>. Sem perguntas e sem burocracia.
            </p>
          </div>
        </div>

        <div class="flex items-center justify-center gap-6 grayscale opacity-60 scale-90 mb-6">
          <img src="https://img.icons8.com/color/48/000000/visa.png" class="h-6" alt="Visa" />
          <img src="https://img.icons8.com/color/48/000000/mastercard.png" class="h-6" alt="Mastercard" />
          <img src="https://img.icons8.com/color/48/000000/pix.png" class="h-6" alt="Pix" />
        </div>
        
        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Pagamento 100% Seguro e Acesso Instantâneo
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const essencialFeatures = [
  'Segredos para Gabaritar Português em Concursos',
  'Método validado por milhares de candidatos',
  'Gramática descomplicada e direta',
  'Técnicas para aumentar seus acertos',
  'Acesso imediato após a compra'
];

const completoFeatures = [
  'Segredos para Gabaritar Português em Concursos',
  'Apostila Completa de Português para Concurso',
  'Questões com gabarito para treino prático',
  'Gramática explicada de forma simples',
  'Material organizado para estudo acelerado',
  'Acesso imediato após a compra'
];
</script>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
