<template>
  <div 
    :class="[
      'group relative p-6 rounded-3xl transition-all duration-500',
      variantClasses[variant],
      hoverClasses[variant]
    ]"
  >
    <!-- Background Gradient (Subtle) -->
    <div 
      v-if="variant === 'default'"
      class="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-3xl -z-10"
    ></div>

    <div class="flex flex-col h-full">
      <!-- Icon/Emoji Area -->
      <div 
        v-if="icon || $slots.icon"
        :class="[
          'mb-5 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3',
          iconContainerClass || 'w-12 h-12 text-2xl'
        ]"
      >
        <slot name="icon">{{ icon }}</slot>
      </div>

      <!-- Content -->
      <h3 class="font-display font-bold text-lg text-neutral-dark mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
        <slot name="title">{{ title }}</slot>
      </h3>
      
      <p class="text-sm text-slate-500 leading-relaxed">
        <slot name="description">{{ description }}</slot>
      </p>

      <!-- Custom Body Slot -->
      <slot />
    </div>

    <!-- Hover Border Decoration -->
    <div class="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/10 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  iconContainerClass: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'surface'].includes(value)
  }
});

const variantClasses = {
  default: 'bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]',
  primary: 'bg-primary text-white shadow-xl shadow-primary/20',
  surface: 'border transition-shadow shadow-sm'
};

const hoverClasses = {
  default: 'hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1',
  primary: 'hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1',
  surface: 'hover:bg-white hover:border-primary/20 hover:shadow-xl hover:-translate-y-1'
};
</script>
