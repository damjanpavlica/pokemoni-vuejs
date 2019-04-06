const inicijalnoPokemona = 12

new Vue({
  el: "#main",

  data() {
    return {
      dobrodosli: "Dobrodosli na Pokemon aplikaciju",
      pokemoni: [],
      prikaziOd: 0,
      poStranici: inicijalnoPokemona,
      prikaziDo: inicijalnoPokemona,
      aktivnaStrana: 1,
    }
  },

  mounted() {
    axios
      .get('https://api.pokemontcg.io/v1/cards')
      .then(res => {
        this.pokemoni = res.data.cards
      })
  },

  methods: {
    okreniStranu(brojStrane) {
      this.prikaziOd = brojStrane * this.poStranici - this.poStranici
      this.prikaziDo = brojStrane * this.poStranici
      this.aktivnaStrana = brojStrane
    },

    jelNaTrenutnojStrani(i) {
      return i >= this.prikaziOd && i < this.prikaziDo
    },

    brojStrana() {
      return Math.ceil(this.pokemoni.length / this.poStranici)
    },

    azurirajPrikaz() {
      this.okreniStranu(1)
      this.prikaziDo = this.poStranici
    }
  }

})