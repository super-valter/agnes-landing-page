<template>
  <footer class="w-full pt-7 bg-gray-100 mt-10">
    <div class="container m-auto">
      <div class="grid grid-cols-12">
        <div class="col-span-4">
          <h3 class="text-xl text-brand-main font-semibold">Chama a Rasta</h3>
          <ul class="">
            <li
              v-for="contatc in store.contatcs"
              :key="contatc.id"
              class="text-brand-main mt-4"
            >
              <a
                :href="contatc.link"
                class="flex items-center leading-5"
                :aria-label="contatc.icon"
              >
                <icon
                  :name="contatc.icon"
                  size="20"
                  class="cursor-pointer mr-2"
                  color="#f37f94"
                  :alt="contatc.info"
                />
                {{ contatc.info }}
              </a>
            </li>
          </ul>
        </div>
        <div class="col-span-4">
          <h3 class="text-xl text-brand-main font-semibold">
            Permaneça conectado
          </h3>
          <ul class="flex mt-3">
            <li v-for="socialMedia in store.socialMedia" :key="socialMedia.id">
              <a
                :href="socialMedia.link"
                target="_blank"
                class="bg-brand-main p-2 rounded-full inline-block text-center mr-2"
                :aria-label="socialMedia.icon"
              >
                <icon
                  :name="socialMedia.icon"
                  size="18"
                  class="cursor-pointer"
                  color="#FFF"
                  :alt="socialMedia.aLtMessage"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full bg-brand-main mt-10">
      <p class="text-sm text-white text-center pb-5 pt-2">
        Copyright AgnesRasta Bolsas e Acessórios - 16930747000189 -
        {{ dataFormatada }}. Todos os direitos reservados.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { computed, defineAsyncComponent } from "vue";
import { store } from "../store";

const icon = defineAsyncComponent(() => import("./Icon/VIndex.vue"));

const dataFormatada = computed(() => {
  const yearCurrent = new Date();
  return yearCurrent.getFullYear();
});
</script>
