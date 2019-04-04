new Vue({
  el: "main",

  data() {
    return {
      dobrodosli: "Dobrodosli na Pokemon aplikaciju",
      pokemoni: [],
      prikaziOd: 0,
      prikaziDo: 20,
      poStranici: 20,
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
    }
  }

})