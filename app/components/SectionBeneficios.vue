<template>
  <section id="beneficios" class="py-16 bg-slate-50/50 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-[100px] -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate-fade-in-up">
        <span class="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">Vantagens exclusivas</span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-dark mb-6 tracking-tight">
          Porque escolher nosso material?
        </h2>
        <div class="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        <BaseCard
          v-for="(beneficio, index) in beneficios"
          :key="index"
          :icon="beneficio.icon"
          :title="beneficio.title"
          :description="beneficio.description"
          variant="surface"
          :class="[
            'animate-fade-in-up',
            index % 4 === 0 ? 'bg-blue-50/50 border-blue-100 hover:border-blue-200' : 
            index % 4 === 1 ? 'bg-indigo-50/50 border-indigo-100 hover:border-indigo-200' :
            index % 4 === 2 ? 'bg-slate-50 border-slate-200 hover:border-primary/20' :
            'bg-sky-50/50 border-sky-100 hover:border-sky-200'
          ]"
          :style="{ animationDelay: `${index * 0.05}s` }"
        />
      </div>

      <!-- CTA After Benefits -->
      <div class="mt-16 flex justify-center px-4 animate-fade-in-up" style="animation-delay: 600ms;">
        <BaseButton 
          size="xl" 
          rounded="2xl"
          class="shadow-2xl shadow-primary/30 w-full sm:w-auto min-w-[300px]"
          @click="scrollToPlanos"
        >
          Acessar Material Completo
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

const beneficios = [
  {
    icon: '🎯',
    title: 'Mais acertos em português',
    description: 'Domine as regras que realmente caem e aumente sua pontuação nas questões de português.'
  },
  {
    icon: '⚡',
    title: 'Gramática simples e direta',
    description: 'Nada de linguagem complicada. Você aprende português de forma clara, objetiva e prática.'
  },
  {
    icon: '🧠',
    title: 'Entenda como as bancas cobram',
    description: 'Aprenda a identificar padrões das provas e pare de errar por pegadinhas clássicas.'
  },
  {
    icon: '📉',
    title: 'Sem pontos perdidos à toa',
    description: 'Descubra os erros mais comuns que reprovam candidatos e saiba exatamente como evitá-los.'
  },
  {
    icon: '📈',
    title: 'Foco no que realmente importa',
    description: 'Chega de perder tempo com conteúdos que quase não caem em concursos.'
  },
  {
    icon: '⏱',
    title: 'Economize meses de estudo',
    description: 'Material direto ao ponto, organizado para acelerar sua preparação.'
  },
  {
    icon: '🧩',
    title: 'Técnicas de eliminação',
    description: 'Mesmo quando estiver em dúvida, você aumenta muito suas chances de acertar.'
  },
  {
    icon: '📚',
    title: 'Quase 300 páginas de conteúdo',
    description: 'Um guia completo para você estudar português para concursos em um único material.'
  },
  {
    icon: '✅',
    title: 'Questões com gabarito',
    description: 'Você não fica só na teoria — pratica com exercícios no estilo das provas.'
  },
  {
    icon: '🏆',
    title: 'Método validado por milhares',
    description: 'Estratégia testada por concurseiros que buscavam melhorar o desempenho.'
  },
  {
    icon: '🔥',
    title: 'Mais confiança na prova',
    description: 'Entre na prova sabendo exatamente como atacar cada questão de português.'
  },
  {
    icon: '🎯',
    title: 'Iniciantes e Avançados',
    description: 'Serve tanto para quem está começando quanto para quem precisa destravar português.'
  }
];
</script>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
