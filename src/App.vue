<template>
  <div class="flex flex-col h-screen">
    <header class="w-full bg-brand-main py-3">
      <div class="container mx-auto">
        <nav>
          <ul class="grid grid-cols-3">
            <li class="flex justify-center items-center text-white col-span-3 sm:col-span-1"
              v-for="contatc in state.contatcs" :key="contatc.id">
              <icon :name="contatc.icon" size="20" class="cursor-pointer mr-2" color="#FFF" :alt="contatc.info" />
              {{ contatc.info }}
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <section class="container mx-auto flex justify-center">
      <img
        srcset="
            ./assets/images/agnes-rasta-banner-320w.jpg 320w,
            ./assets/images/agnes-rasta-banner-480w.jpg 480w,
            ./assets/images/agnes-rasta-banner-800w.jpg 800w
            ./assets/images/agnes-rasta-banner-1047w.jpg 1047w
          " sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            (max-width: 800px) 800px,
            1047px" src="./assets/images/agnes-rasta-banner.jpg"
        alt="AgnesRasta Bolsas e Acessórios"
        class="w-full"
      />
    </section>

    <section>
      <h1>Ateliê e loja de costura criativa</h1>
      <p>
        Criado para atender as alunas e interessados em artesanato de forma ágil e prática. Você também poderá contar com aulas, lives e cursos através das nossas redes sociais.
      </p>
    </section>

    <section class="container mx-auto mt-20 grid grid-cols-3">
      <div v-for="highlight in state.highlights" :key="highlight.id" class="col-span-3 sm:col-span-1">
        <img :src="getImageHighlight(highlight.image)" :alt="highlight.title" class="mb-3 pr-3 w-full rounded-3xl">
        <h1 class="text-center text-xl font-semibold uppercase">
          {{ highlight.title }}
        </h1>
      </div>
    </section>

    <footer class="w-full pt-7 bg-gray-100 mt-10">
      <div class="container m-auto ">
        <div grid grid-cols-12>

        </div>
        <div class="flex items-center">
          <h3 class=" text-lg text-brand-main">Permaneça conectado: </h3>
          <a v-for="socialMedia in state.socialMedia" :key="socialMedia.id" :href="socialMedia.link" target="_blank" class="bg-brand-main p-2 rounded-full inline-block text-center ml-2">
            <icon :name="socialMedia.icon" size="18" class="cursor-pointer" color="#FFF" :alt="socialMedia.aLtMessage" />
          </a>
        </div>
        <p class="text-sm text-gray-800 text-center my-7">
          Copyright AgnesRasta Bolsas e Acessórios - 16930747000189 - {{ dataFormatada }}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reactive, defineAsyncComponent, computed } from "vue";

const icon = defineAsyncComponent(() => import('./components/Icon/VIndex.vue'))


const state = reactive({
  contatcs: [
    {
      id: 1,
      info: "+55 (11) 99540.0676",
      icon: "whatsapp",
      link: "",
    },
    {
      id: 2,
      info: "(11) 99540.0676",
      icon: "phone",
      link: "",
    },
    {
      id: 3,
      info: "agnesrasta@hotmail.com",
      icon: "email",
      link: "",
    },
  ],
  highlights: [
    {
      id: 1,
      image: "pochete",
      title: "pochetes",
      altImage: "",
    },
    {
      id: 2,
      image: "bolsas",
      title: "bolsas",
      altImage: "",
    },
    {
      id: 3,
      image: "acessorios",
      title: "Acessórios",
      altImage: "",
    },
  ],
  socialMedia: [
    {
      id: 1,
      icon: 'instagran',
      aLtMessage: 'Bolsas e acessórios 100% artesanal 🖤',
      link: 'https://www.instagram.com/agnesrasta'
    },
    {
      id: 2,
      icon: 'facebook',
      aLtMessage: 'Moda artesanal feita em diversos materiais e para várias ocasiões.',
      link: 'https://www.facebook.com/agnesrastamoda'
    },
    {
      id: 2,
      icon: 'pinterest',
      aLtMessage: 'Produtos, inspirações, cursos, trabalhos, novas experiências e empreendedorismo.',
      link: 'https://br.pinterest.com/agnesrasta/'
    },
  ]
});

const getImageHighlight = (imgage) => {
  return `src/assets/images/${imgage}.jpg`
}

const dataFormatada = computed(() =>{
  const yearCurrent = new Date();
  return  yearCurrent.getFullYear()
})
</script>
