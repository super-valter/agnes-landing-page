<template>
       <header class="w-full bg-brand-main py-3">
      <div class="container mx-auto">
        <nav>
          <ul class="grid grid-cols-3">
            <template v-for="contatc in store.contatcs"
              :key="contatc.id">
            <li
              class="flex justify-center text-white col-span-3 sm:col-span-1"
              v-if="!(contatc.id === 2 || contatc.id === 4)"
            >
              <a
                :href="contatc.link"
                class="flex items-center"
                :aria-label="contatc.icon"
                target="_blank"
              >
                <icon
                  :name="contatc.icon"
                  size="20"
                  class="cursor-pointer mr-2"
                  color="#FFF"
                  :alt="contatc.info"
                />
                {{ contatc.info }}
              </a>
            </li>
            </template>
          </ul>
        </nav>
      </div>
    </header>
    <section class="container mx-auto flex justify-center">

        <img
        src="../assets/images/agnes-rasta-banner-1047.jpg"
        alt="AgnesRasta Bolsas e Acessórios"
        class="w-full"
      />
    </section>
</template>

<script setup>

import { defineAsyncComponent } from "vue";
import { store } from "../store";

const icon = defineAsyncComponent(() => import("./Icon/VIndex.vue"));

</script>