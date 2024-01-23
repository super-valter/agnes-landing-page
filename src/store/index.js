import { reactive } from 'vue'

export const store = reactive({
    contatcs: [
      {
        id: 1,
        info: "+55 (11) 99540.0676",
        icon: "whatsapp",
        link: "https://wa.me/5511995400676",
      },
      {
        id: 2,
        info: "(11) 99540.0676",
        icon: "phone",
        link: "tel:11995400676",
      },
      {
        id: 3,
        info: "agnesrasta@hotmail.com",
        icon: "email",
        link: "agnesrasta@hotmail.com",
      },
      {
        id: 4,
        info: "Rua Cerqueira Cesar, 60 loja 05 - Santo Amaro - São Paulo/SP",
        icon: "location",
        link: "javascript:void(0)",
      },
    ],
    highlights: [
      {
        id: 1,
        image: "./assets/images/pochete.jpg",
        title: "pochetes",
        aLtMessage: "",
      },
      {
        id: 2,
        image: "./assets/images/bolsas.jpg",
        title: "bolsas",
        aLtMessage: "",
      },
      {
        id: 3,
        image: "./assets/images/acessorios.jpg",
        title: "Acessórios",
        aLtMessage: "",
      },
    ],
    socialMedia: [
      {
        id: 1,
        icon: "instagran",
        aLtMessage: "Bolsas e acessórios 100% artesanal 🖤",
        link: "https://www.instagram.com/agnesrasta",
      },
      {
        id: 2,
        icon: "facebook",
        aLtMessage:
          "Moda artesanal feita em diversos materiais e para várias ocasiões.",
        link: "https://www.facebook.com/agnesrastamoda",
      },
      {
        id: 3,
        icon: "pinterest",
        aLtMessage:
          "Produtos, inspirações, cursos, trabalhos, novas experiências e empreendedorismo.",
        link: "https://br.pinterest.com/agnesrasta/",
      },
      {
        id: 4,
        icon: "youtube",
        aLtMessage:
          "Com boas energias esse canal foi criado para compartilhar o que eu amo com você, teremos aulas, dicas e muito amor.",
        link: "https://www.youtube.com/channel/UCmQcTvzvC7t2SKMh50y8U5Q",
      },
    ],
  });