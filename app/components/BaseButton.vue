<template>
  <component
    :is="componentType"
    :to="to || href"
    :class="[
      'inline-flex items-center justify-center font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group whitespace-nowrap',
      variantClasses[variant],
      sizeClasses[size],
      roundedClasses[rounded]
    ]"
    v-bind="componentProps"
  >
    <!-- Loading Spinner -->
    <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>

    <!-- Left Icon Slot -->
    <slot name="left-icon">
      <component 
        :is="leftIcon" 
        v-if="leftIcon" 
        :class="['h-5 w-5', size === 'sm' ? 'h-4 w-4' : '']"
      />
    </slot>

    <!-- Label -->
    <span :class="{'ml-2': leftIcon || $slots['left-icon'], 'mr-2': rightIcon || $slots['right-icon']}">
      <slot>{{ label }}</slot>
    </span>

    <!-- Right Icon Slot -->
    <slot name="right-icon">
      <component 
        :is="rightIcon" 
        v-if="rightIcon" 
        :class="['h-5 w-5 transition-transform duration-300 group-hover:translate-x-1', size === 'sm' ? 'h-4 w-4' : '']"
      />
    </slot>
  </component>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  to: {
    type: [String, Object],
    default: ''
  },
  href: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'white'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  rounded: {
    type: String,
    default: 'xl',
    validator: (value) => ['md', 'lg', 'xl', '2xl', 'full'].includes(value)
  },
  leftIcon: {
    type: [Object, Function],
    default: null
  },
  rightIcon: {
    type: [Object, Function],
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

import { computed, useAttrs } from 'vue';
const attrs = useAttrs();

const componentType = computed(() => {
  if (props.to || props.href) return 'NuxtLink';
  return 'button';
});

const componentProps = computed(() => {
  if (props.to || props.href) {
    return { ...attrs };
  }
  return {
    disabled: props.disabled || props.loading,
    ...attrs
  };
});

const variantClasses = {
  primary: 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-700 hover:shadow-primary/40 text-white',
  secondary: 'bg-neutral-dark text-white hover:bg-neutral-900 shadow-lg shadow-neutral-dark/10',
  outline: 'bg-transparent border-2 border-primary/20 text-primary hover:bg-primary-50',
  ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-neutral-dark',
  white: 'bg-white text-primary hover:bg-primary-50 shadow-sm border border-black/5'
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-xl'
};

const roundedClasses = {
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full'
};
</script>
