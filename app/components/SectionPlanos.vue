<template>
  <section id="planos" class="pt-12 pb-24 sm:py-24 bg-white relative overflow-hidden">
    <!-- Background patterns -->
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Ancoragem de Valor -->
      <div class="max-w-2xl mx-auto text-center mb-14 animate-fade-in-up">
        <p class="text-slate-700 text-lg sm:text-xl leading-relaxed mb-6">
          Se esse material te ajudar a acertar apenas
          <span class="text-neutral-dark font-bold">2 questões a mais</span>,
          isso pode significar sua aprovação em um concurso que paga
          <span class="text-primary font-black">R$&nbsp;3.000, R$&nbsp;5.000 ou mais por mês.</span>
        </p>
        <p class="text-slate-500 text-base sm:text-lg leading-relaxed mb-5">Agora pense:</p>
        <p class="text-neutral-dark text-xl sm:text-2xl lg:text-3xl font-black font-display tracking-tight">
          Quanto vale garantir esses pontos?
        </p>
        <div class="w-16 h-1 bg-primary/40 mx-auto rounded-full mt-6"></div>
      </div>

      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-dark mb-6 tracking-tight">
          Escolha a Melhor Opção Para Sua <span class="text-primary">Aprovação</span>
        </h2>
        <p class="text-slate-500 max-w-2xl mx-auto text-lg">
          Comece hoje a melhorar sua pontuação em português.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">

        <!-- ===== CARD ESSENCIAL ===== -->
        <div class="animate-fade-in-up flex flex-col rounded-3xl bg-slate-800 border border-slate-700 shadow-2xl shadow-slate-900/30 overflow-hidden" style="animation-delay: 200ms;">

          <!-- Topo do card -->
          <div class="p-6 pb-0">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-11 h-11 rounded-2xl bg-slate-700 border border-slate-600 flex items-center justify-center text-2xl shadow-inner flex-shrink-0">
                📘
              </div>
              <div>
                <h3 class="font-display font-black text-lg text-white leading-tight">Essencial Português</h3>
                <p class="text-emerald-400 text-xs font-bold mt-0.5">🚀 Elimine seus erros em poucas horas</p>
              </div>
            </div>

            <!-- Social proof -->
            <div class="flex items-center gap-1.5 mb-6">
              <div class="flex text-yellow-400 text-xs">⭐⭐⭐⭐⭐</div>
              <span class="text-slate-400 text-xs font-medium">Mais de <span class="text-white font-bold">1.247 candidatos</span> já usam</span>
            </div>
          </div>

          <!-- Features -->
          <div class="px-6 flex-grow">
            <ul class="space-y-3">
              <li v-for="(item, i) in essencialFeatures" :key="i" class="flex items-start gap-3">
                <span class="text-emerald-400 mt-0.5 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span class="text-slate-300 text-sm leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Preço e botão -->
          <div class="mt-8 p-6 border-t border-slate-700">
            <div class="flex items-center justify-between gap-2 mb-5">
              <div class="flex flex-col gap-1">
                <div class="flex items-center gap-2">
                  <span class="text-slate-500 line-through text-xs whitespace-nowrap">De R$ 47,00</span>
                  <span class="bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap">66% OFF</span>
                </div>
                <span class="text-slate-300 text-xs font-bold uppercase tracking-wider">💥 Por apenas</span>
              </div>
              <div class="text-right">
                <span class="text-3xl sm:text-4xl font-black text-white leading-none whitespace-nowrap">R$ 15,90</span>
              </div>
            </div>
            <a
              href="https://checkout.topvendas.site/VCCL1O8SCTOB"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full py-4 text-center text-base font-black rounded-2xl border-2 border-slate-400 text-white hover:border-white hover:bg-slate-700 active:scale-95 transition-all duration-300"
            >
              👉 QUERO GARANTIR AGORA
            </a>
          </div>
        </div>

        <!-- ===== CARD COMPLETO ===== -->
        <div class="relative group h-full animate-fade-in-up" style="animation-delay: 400ms;">

          <!-- Badge MAIS VENDIDO -->
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <span class="bg-warning text-neutral-dark text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg border-2 border-white whitespace-nowrap">
              🏆 MAIS VENDIDO
            </span>
          </div>

          <!-- Glow -->
          <div class="absolute -inset-1 bg-gradient-to-br from-primary via-primary/80 to-blue-400 rounded-[28px] blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

          <div class="relative flex flex-col h-full rounded-3xl border border-primary/30 shadow-2xl overflow-hidden"
            style="background: linear-gradient(145deg, #1a3a7c 0%, #1e4db7 40%, #2563eb 100%);">

            <!-- Luzes internas -->
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none"></div>

            <!-- Topo -->
            <div class="p-6 pb-0 relative z-10">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl shadow-inner backdrop-blur-sm flex-shrink-0">
                  🚀
                </div>
                <div>
                  <h3 class="font-display font-black text-lg text-white leading-tight">Português Completo para Concursos</h3>
                  <p class="text-yellow-300 text-xs font-bold mt-0.5">🎯 O pacote definitivo para chegar competitivo</p>
                </div>
              </div>

              <!-- Social proof destaque -->
              <div class="flex items-center gap-1.5 mb-6">
                <div class="flex text-yellow-400 text-xs">⭐⭐⭐⭐⭐</div>
                <span class="text-blue-200 text-xs font-medium">Mais de <span class="text-white font-bold">3.582 alunos</span> já escolheram</span>
              </div>
            </div>

            <!-- Features -->
            <div class="px-6 flex-grow relative z-10">
              <ul class="space-y-3">
                <li v-for="(item, i) in completoFeatures" :key="i" class="flex items-start gap-3">
                  <span class="text-emerald-300 mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span class="text-white text-sm font-semibold leading-relaxed">{{ item }}</span>
                </li>
              </ul>

              <!-- Bônus visual -->
              <div class="mt-5 px-4 py-3 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-sm">
                <p class="text-white text-xs font-black uppercase tracking-wider flex items-center gap-2">
                  🔥 Leve os 2 materiais com desconto máximo
                </p>
              </div>
            </div>

            <!-- Preço e botão -->
            <div class="mt-8 p-6 border-t border-white/15 relative z-10">
              <div class="flex items-center justify-between gap-2 mb-5 relative z-10">
                <div class="flex flex-col gap-1">
                  <div class="flex items-center gap-2">
                    <span class="text-blue-300 line-through text-xs whitespace-nowrap">De R$ 79,00</span>
                    <span class="bg-yellow-400/20 text-yellow-300 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full whitespace-nowrap">75% OFF</span>
                  </div>
                  <span class="text-blue-100 text-xs font-bold uppercase tracking-wider">💥 Por apenas</span>
                </div>
                <div class="text-right">
                  <span class="text-4xl sm:text-5xl font-black text-white drop-shadow-lg leading-none whitespace-nowrap">R$ 19,90</span>
                </div>
              </div>
              <a
                href="https://checkout.topvendas.site/VCCL1O8SCTOC"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full py-5 text-center text-lg font-black rounded-2xl bg-white text-primary shadow-2xl hover:bg-yellow-50 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                👉 QUERO O PACOTE COMPLETO
              </a>
            </div>
          </div>
        </div>

      </div>

      
      <!-- Secure Payment & Guarantee Note -->
      <div class="mt-16 text-center max-w-2xl mx-auto">
        <!-- Urgência -->
        <div class="mb-8 rounded-2xl border-2 border-amber-400/60 bg-amber-50 p-6 text-left animate-fade-in-up" style="animation-delay: 500ms;">
          <p class="flex items-center gap-2 text-amber-700 font-black text-base uppercase tracking-wide mb-3">
            <span class="text-xl">⚠️</span> Aviso
          </p>
          <p class="text-amber-800 font-semibold text-sm sm:text-base leading-relaxed mb-2">
            O valor promocional é temporário e pode voltar ao preço original a qualquer momento.
          </p>
          <p class="text-amber-700 text-sm sm:text-base leading-relaxed">
            Se você está estudando agora, não faz sentido continuar errando o que pode ser resolvido hoje.
          </p>
        </div>

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
  'Método direto ao ponto (sem enrolação)',
  'Gramática explicada de forma simples',
  'Técnicas para aumentar seus acertos rápido',
  'Acesso imediato após a compra'
];

const completoFeatures = [
  'Segredos para Gabaritar Português em Concursos',
  'Apostila Completa de Português para Concurso',
  'Questões com gabarito comentado',
  'Gramática descomplicada passo a passo',
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
