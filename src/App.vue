<template>
  <div class="flex flex-col h-screen">
    <v-header />

    <section class="w-3/4 mx-auto py-20 text-center">
      <h1 class="text-3xl font-semibold text-brand-main">
        Ateliê e loja de costura criativa
      </h1>
      <p class="mt-3 mx-auto">
        Criado para atender as alunas e interessados em costura criativa de
        forma prática. Você também poderá contar com aulas presenciais e on-line
        através de conteúdos diários em nossas redes sociais.
      </p>
    </section>

    <section class="container mx-auto mt-5 grid grid-cols-3">
      <div
        v-for="highlight in store.highlights"
        :key="highlight.id"
        class="col-span-3 sm:col-span-1"
      >
        <a :href="highlight.link" target="_blank">
          <img
            :src="highlight.image"
            :alt="highlight.title"
            class="mb-3 pr-3 w-full rounded-3xl"
          />
          <h1 class="text-center text-xl font-semibold px-5">
            {{ highlight.title }}
          </h1>
        </a>
      </div>
    </section>

    <v-footer />
  </div>
</template>

<script setup>
import { store } from "@/store/index";

import VFooter from "@/components/VFooter.vue";
import VHeader from "@/components/VHeader.vue";

const getImageHighlight = (image) => {
  return `${image}`;
};
</script>
