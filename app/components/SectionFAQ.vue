<template>
  <section id="faq" class="pt-12 pb-24 sm:py-24 bg-slate-50 relative overflow-hidden">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-dark mb-6 tracking-tight">
          Dúvidas <span class="text-primary">Frequentes</span>
        </h2>
        <p class="text-slate-500 text-lg">
          Tire suas principais dúvidas sobre o material e comece agora mesmo.
        </p>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqs" 
          :key="index"
          class="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md animate-fade-in-up"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <button 
            @click="toggle(index)"
            class="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
          >
            <span class="text-neutral-dark font-bold text-base sm:text-lg whitespace-nowrap overflow-hidden text-ellipsis mr-4">
              {{ item.pergunta }}
            </span>
            <div 
              :class="[
                'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0',
                activeIndex === index ? 'bg-primary text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary'
              ]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </button>
          
          <div 
            v-show="activeIndex === index"
            class="px-6 pb-6 text-slate-500 text-sm sm:text-base leading-relaxed animate-fade-in"
          >
            {{ item.resposta }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = [
  {
    pergunta: 'Funciona para qualquer concurso?',
    resposta: 'Sim! O material foca nos pilares da gramática e interpretação de texto que são cobrados em 99% das bancas organizadoras do Brasil (CESPE, FGV, FCC, Vunesp, etc).'
  },
  {
    pergunta: 'Recebo na hora?',
    resposta: 'Com certeza. Assim que o pagamento for confirmado (instantâneo no Pix ou Cartão), você recebe um e-mail com o link para baixar todo o material.'
  },
  {
    pergunta: 'É para iniciantes?',
    resposta: 'Sim, e também para quem já estuda há tempo. A didática é direta e sem enrolação, perfeita para quem precisa aprender do zero ou destravar conteúdos complexos.'
  },
  {
    pergunta: 'Preciso imprimir?',
    resposta: 'Fica a seu critério. O material é digital (PDF), otimizado para leitura em tablets, celulares e computadores, mas você pode imprimir se preferir estudar no papel.'
  },
  {
    pergunta: 'Como funciona a garantia?',
    resposta: 'É risco zero. Você tem 7 dias para testar. Se achar que o material não é para você, devolvemos 100% do seu investimento sem perguntas.'
  }
];
</script>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out forwards;
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
