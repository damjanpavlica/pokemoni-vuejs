Vue.component('moj-header', {
    data() {
        return {
            imeSajta: "Pokemoni"
        }
    },

    template: `
    <header>
        <h2>{{imeSajta}}</h2>
    </header>
    `
})