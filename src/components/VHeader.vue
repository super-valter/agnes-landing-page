<template>
       <header class="w-full bg-brand-main py-3">
      <div class="container mx-auto">
        <nav>
          <ul class="grid grid-cols-3">
            <li
              v-for="contatc in store.contatcs"
              :key="contatc.id"
              class="flex justify-center text-white col-span-3 sm:col-span-1"
            >
              <a
                :href="contatc.link"
                class="flex items-center"
                v-if="contatc.id != 4"
                :aria-label="contatc.icon"
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
          </ul>
        </nav>
      </div>
    </header>
    <section class="container mx-auto flex justify-center">
      <img
        srcset="
            ../assets/images/agnes-rasta-banner-320w.jpg 320w,
            ../assets/images/agnes-rasta-banner-480w.jpg 480w,
            ../assets/images/agnes-rasta-banner-800w.jpg 800w
            ../assets/images/agnes-rasta-banner-1047w.jpg 1047w
          "
        sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            (max-width: 800px) 800px,
            1047px"
        src="../assets/images/agnes-rasta-banner.jpg"
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