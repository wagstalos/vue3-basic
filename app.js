const { createApp } = Vue;

createApp({

  data() {
    return {
      title: "Vue 3",
      name: "Wagner",
      lastName: "Silva",
      products: [
        {
          title: "Pinóquio",
          description:
            "O conto do boneco de madeira em uma arrepiante aventura para virar um menino de verdade, recontado.",
          image: "./assets/images/filme01.jpg",
          stars: 3,
        },
        {
          title: "The Walking Dead",
          description:
            "Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos. O desespero por segurança e suprimentos os coloca constantemente à beira da sanidade.",
          image: "./assets/images/filme02.jpg",
          stars: 4,
        },
        {
          title: "Top Gun: Maverick",
          description:
            "Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete Mitchell está de volta, rompendo os limites como um piloto de testes corajoso. No mundo contemporâneo das guerras tecnológicas, Maverick enfrenta drones e prova que o fator humano ainda é essencial.",
          image: "./assets/images/filme03.jpg",
          stars: 5,
        },
        {
          title: "Thor: Amor e Trovão ",
          description:
            "Thor parte em uma jornada de autodescoberta, diferente de tudo que ele já enfrentou. Mas seus esforços são interrompidos por um assassino galáctico conhecido como Gorr, o Carniceiro dos Deuses, que busca a extinção dos deuses. Para combater esta ameaça, Thor pede a ajuda da Rei Valquíria, Korg e da ex-namorada Jane Foster, que, para a surpresa de Thor, inexplicavelmente empunha seu mágico martelo, Mjolnir, como a Poderosa Thor. Juntos, eles embarcam em uma angustiante aventura cósmica para descobrir o mistério da vingança do Carniceiro dos Deuses e",
          image: "./assets/images/filme04.jpg",
          stars: 2,
        },
        {
          title: "Top Gun: Maverick",
          description:
            "Depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, Pete Mitchell está de volta, rompendo os limites como um piloto de testes corajoso. No mundo contemporâneo das guerras tecnológicas, Maverick enfrenta drones e prova que o fator humano ainda é essencial.",
          image: "./assets/images/filme03.jpg",
          stars: 5,
        },
        {
          title: "Thor: Amor e Trovão ",
          description:
            "Thor parte em uma jornada de autodescoberta, diferente de tudo que ele já enfrentou. Mas seus esforços são interrompidos por um assassino galáctico conhecido como Gorr, o Carniceiro dos Deuses, que busca a extinção dos deuses. Para combater esta ameaça, Thor pede a ajuda da Rei Valquíria, Korg e da ex-namorada Jane Foster, que, para a surpresa de Thor, inexplicavelmente empunha seu mágico martelo, Mjolnir, como a Poderosa Thor. Juntos, eles embarcam em uma angustiante aventura cósmica para descobrir o mistério da vingança do Carniceiro dos Deuses e",
          image: "./assets/images/filme04.jpg",
          stars: 2,
        },
      ],

      cart: [],

      // textColor: '#000',
      // bgColor: '#fff',

      styles: {
        backgroundColor: "#fff",
        color: "#100328",
      },

      themeBlack: true,
    };
  },

  computed: {
    fullName() {
      return this.name + " " + this.lastName;
    },
  },

  methods: {
    addCart(product) {
      this.cart.push(product);
    },

    inCart(product) {
      return this.cart.indexOf(product) != -1;
    },

    removeCart(product) {
      this.cart = this.cart.filter((prod, index) => product != prod);
    },

    toogleTheme() {
      this.themeBlack = !this.themeBlack;

      if (this.themeBlack) {
        this.styles.backgroundColor = "#fff";
        this.styles.color = "#100328";
      } else {
        this.styles.backgroundColor = "#100328";
        this.styles.color = "#fff";
      }
    },
  },
}).mount("#app");
