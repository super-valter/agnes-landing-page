<template>
    <component
      :is="state.iconComponent"
      v-bind="$props"
    />
  </template>
  
  <script setup>
  import { defineAsyncComponent, onMounted, reactive } from 'vue'
  
  const Whatsapp = defineAsyncComponent(() => import('./WhatsApp.vue'))
  const Email = defineAsyncComponent(() => import('./Email.vue'))
  const Phone = defineAsyncComponent(() => import('./Phone.vue'))
  const Facebook = defineAsyncComponent(() => import('./Facebook.vue'))
  const Pinterest = defineAsyncComponent(() => import('./Pinterest.vue'))
  const Instagran = defineAsyncComponent(() => import('./Instagran.vue'))
  
  const iconProps = defineProps({
    name: {
      type: [Number, String],
      required: true
    }
  });
  
  const state = reactive({
    iconComponent: null
  })
  
  const listIcon = {
    'whatsapp': Object.freeze(Whatsapp),
    'phone': Object.freeze(Phone),
    'email': Object.freeze(Email),
    'facebook': Object.freeze(Facebook),
    'instagran': Object.freeze(Instagran),
    'pinterest': Object.freeze(Pinterest),
  }
  
  onMounted(() => {
    state.iconComponent = listIcon[iconProps.name]
  });
  
  </script>
  
  