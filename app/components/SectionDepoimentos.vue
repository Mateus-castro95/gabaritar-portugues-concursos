<template>
  <section class="pt-12 pb-24 bg-slate-50 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16 animate-fade-in-up">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-neutral-dark mb-6 tracking-tight">
          Histórias de <span class="text-primary italic">Sucesso</span>
        </h2>
        <p class="text-slate-500 max-w-2xl mx-auto text-lg">
          Resultados reais de candidatos que aplicaram o método:
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BaseCard 
          v-for="(depoimento, index) in depoimentos" 
          :key="index"
          class="h-full animate-fade-in-up"
          :style="{ animationDelay: `${index * 150}ms` }"
          icon-container-class="w-full bg-transparent border-0 shadow-none mb-4 !scale-100 !rotate-0"
        >
          <template #icon>
            <div class="flex items-center justify-between w-full">
              <!-- Avatar Group -->
              <div class="flex items-center gap-4">
                <div class="relative">
                  <div class="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
                    <img :src="depoimento.avatar" :alt="depoimento.nome" class="w-full h-full object-cover" />
                  </div>
                  <!-- Mini Quote Icon -->
                  <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg border-2 border-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91243 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H5.017C4.46472 8 4.0171 8.44772 4.0171 9V12C4.0171 12.5523 3.56939 13 3.0171 13H1.0171C0.464811 13 0.0170898 12.5523 0.0170898 12V9C0.0170898 7.34315 1.36024 6 3.0171 6H9.0171C10.6739 6 12.0171 7.34315 12.0171 9V15C22.017 18.3137 9.33081 21 6.0171 21H4.017Z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <!-- Stars -->
              <div class="flex flex-col items-end gap-1">
                <div class="flex gap-0.5 text-warning">
                  <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span class="text-[10px] font-bold text-success uppercase tracking-wider">Compra Verificada</span>
              </div>
            </div>
          </template>

          <template #title>
            <span class="block text-neutral-dark font-bold text-lg leading-tight">{{ depoimento.nome }}</span>
            <span class="text-slate-400 text-xs font-medium uppercase tracking-wider">{{ depoimento.cidade }}</span>
          </template>

          <template #description>
            <span class="block mt-2 text-slate-600 italic leading-relaxed">
              "{{ depoimento.texto }}"
            </span>
          </template>
        </BaseCard>
      </div>

      <!-- Final Social Proof Stat & CTA -->
      <div class="mt-16 text-center animate-fade-in-up" style="animation-delay: 600ms;">
        <p class="text-slate-400 text-sm font-medium mb-8">
          Junte-se a mais de <span class="text-primary font-bold">5.000 alunos</span> aprovados em todo o Brasil.
        </p>

        <BaseButton 
          size="xl" 
          rounded="2xl"
          class="shadow-2xl shadow-primary/30 w-full sm:w-auto min-w-[300px]"
          @click="scrollToPlanos"
        >
          QUERO AUMENTAR MINHA NOTA
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

const depoimentos = [
  {
    nome: 'Juliana Martins',
    cidade: 'Goiânia - GO',
    texto: 'Eu sempre ficava entre 14 e 15 acertos em Português. Depois de aplicar o método do material, fiz 19 na última prova. Foram exatamente as regras que mais caem. Valeu muito a pena.',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    nome: 'Rafael Souza',
    cidade: 'Campinas - SP',
    texto: 'Estava errando muita questão por bobeira, principalmente vírgula e interpretação. Estudei o material em uma semana e já senti diferença nos simulados. Simples, direto e sem enrolação.',
    avatar: 'https://i.pravatar.cc/150?img=11'
  },
  {
    nome: 'Carolina Freitas',
    cidade: 'Curitiba - PR',
    texto: 'Saí de 12 para 17 acertos em Português depois que foquei só no que o material mostra. Antes eu estudava muito e continuava errando as mesmas coisas. Mudou completamente minha forma de estudar.',
    avatar: 'https://i.pravatar.cc/150?img=45'
  },
  {
    nome: 'Bruno Henrique',
    cidade: 'Belo Horizonte - MG',
    texto: 'O que mais gostei foi o foco nas pegadinhas de banca. Na prova da PM caíram exatamente padrões que estavam no material. Recomendo principalmente pra quem vive perdendo ponto por detalhe.',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    nome: 'Amanda Ribeiro',
    cidade: 'Recife - PE',
    texto: 'Português sempre foi meu pesadelo. Depois desse material comecei a entender de verdade onde eu errava. No último concurso aumentei 5 questões só nessa matéria.',
    avatar: 'https://i.pravatar.cc/150?img=49'
  },
  {
    nome: 'Diego Alves',
    cidade: 'Rio de Janeiro - RJ',
    texto: 'Material bem objetivo. Em dois dias já revisei coisas que eu enrolava há meses. Pra quem quer ganhar pontos rápido em Português, é excelente.',
    avatar: 'https://i.pravatar.cc/150?img=51'
  }
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
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
